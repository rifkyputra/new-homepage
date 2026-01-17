<script lang="ts">
  import { Mail } from "@lucide/svelte";
  import { Nav, Footer, GradientBackground } from "$lib/components";

  const BACKEND_URL = 'https://backend.ky.pir.my.id'; // Update with your backend URL

  let submitting = false;
  let success = false;
  let error: string | null = null;

  async function handleSubmit(event: Event) {
    event.preventDefault();
    submitting = true;
    error = null;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      message: formData.get('message')?.toString().trim() || '',
    };

    try {
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        success = true;
        form.reset();
      } else {
        error = result.error || 'Something went wrong. Please try again.';
      }
    } catch (err) {
      console.error('Contact form error:', err);
      error = 'Failed to send message. Please try again.';
    } finally {
      submitting = false;
    }
  }
</script>

<GradientBackground class="variant-purple">
  <div class="flex justify-center pt-8">
    <Nav />
  </div>

  <main class="container mx-auto px-6 py-12 text-white">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
        Contact Me
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Got a project, question, or just want to say hi? Fill out the form below
        and I'll get back to you as soon as I can.
      </p>
    </div>

    <section class="max-w-2xl mx-auto">
      {#if success}
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
          <h2 class="text-2xl font-bold mb-2">Thanks — message sent ✅</h2>
          <p class="text-gray-300">I'll reply to you shortly.</p>
        </div>
      {:else}
        <form on:submit={handleSubmit} class="space-y-4 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div>
            <label class="block text-sm font-medium text-gray-200 mb-2">Name</label>
            <input name="name" required class="w-full rounded-lg bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-200 mb-2">Email</label>
            <input type="email" name="email" required class="w-full rounded-lg bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-200 mb-2">Message</label>
            <textarea name="message" rows="6" required class="w-full rounded-lg bg-transparent border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          </div>

          {#if error}
            <p class="text-sm text-red-400">{error}</p>
          {/if}

          <div class="flex items-center justify-between gap-4">
            <button type="submit" class="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors font-semibold" disabled={submitting}>
              <Mail class="w-4 h-4" />
              {#if submitting}Sending...{:else}Send message{/if}
            </button>

            <a href="mailto:rifkyadp@gmail.com" class="text-sm text-gray-300 hover:text-white">Or email me directly</a>
          </div>
        </form>
      {/if}
    </section>

    <Footer class="mt-20" />
  </main>
</GradientBackground>

<style>
  /* keep consistent visual style with site */
</style>
