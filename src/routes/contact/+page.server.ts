import { fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      return fail(400, { missing: true });
    }

    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(email)) {
      return fail(400, { invalid: true });
    }

    // For now, just log the submission. You can replace this with an
    // integration to an email provider (SendGrid, Mailgun, Formspree, etc.)
    console.log(`[contact] ${name} <${email}>: ${message}`);

    return { success: true };
  },
};
