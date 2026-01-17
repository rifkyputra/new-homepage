import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { Resend } from 'resend';
const app = new Hono();
// Simple in-memory rate limiter for Cloudflare Workers
const rateLimitMap = new Map();
function checkRateLimit(ip) {
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const limit = 5;
    const record = rateLimitMap.get(ip);
    // Clean up expired entries
    if (record && now > record.resetTime) {
        rateLimitMap.delete(ip);
    }
    const current = rateLimitMap.get(ip);
    if (!current) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
        return { allowed: true, remaining: limit - 1 };
    }
    if (current.count >= limit) {
        return { allowed: false, remaining: 0 };
    }
    current.count++;
    return { allowed: true, remaining: limit - current.count };
}
// CORS middleware - allow requests from your frontend domain
app.use('/*', cors({
    origin: ['https://ky.pir.my.id', 'http://localhost:5173'], // Add your domains
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
    maxAge: 86400,
}));
app.get('/', (c) => c.text('Hono backend (Cloudflare) 🚀'));
app.get('/health', (c) => c.json({ status: 'ok' }));
// Apply rate limiter to contact endpoint
app.post('/contact', async (c) => {
    const ip = c.req.header('cf-connecting-ip') || c.req.header('x-forwarded-for') || 'unknown';
    const rateLimit = checkRateLimit(ip);
    c.header('X-RateLimit-Limit', '5');
    c.header('X-RateLimit-Remaining', String(rateLimit.remaining));
    if (!rateLimit.allowed) {
        return c.json({ success: false, error: 'Too many requests' }, 429);
    }
    try {
        const body = await c.req.json();
        const { name, email, message } = body;
        if (!name || !email || !message) {
            return c.json({ success: false, error: 'Missing required fields' }, 400);
        }
        const resend = new Resend(c.env.RESEND_API_KEY);
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Update with your verified domain
            to: ['rifkyadp@gmail.com'], // Your email
            reply_to: email,
            subject: `Contact form: ${name}`,
            html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });
        if (error) {
            console.error('[worker][contact] resend error', error);
            return c.json({ success: false, error: 'Failed to send email' }, 500);
        }
        console.log('[worker][contact] email sent', data);
        // Save contact to D1 database
        await c.env.DB.prepare('INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, ?)')
            .bind(name, email, message, new Date().toISOString())
            .run();
        return c.json({ success: true });
    }
    catch (e) {
        console.error('[worker][contact] error', e);
        return c.json({ success: false, error: 'Internal server error' }, 500);
    }
});
// Export the handler for Cloudflare Workers
export default {
    fetch: app.fetch,
};
