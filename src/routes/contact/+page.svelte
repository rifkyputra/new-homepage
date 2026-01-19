<script lang="ts">
  import { Mail } from "@lucide/svelte";
  import { Nav, Footer, GradientBackground } from "$lib/components";
  import { createMutation } from '@tanstack/svelte-query';
  import { toast } from 'svelte-sonner';
  import { dev, } from '$app/environment';

  const BACKEND_URL = dev 
    ? 'http://localhost:8787' 
    : 'https://rifky-backend.rifqempul.workers.dev';

  let success = false;
  let formElement: HTMLFormElement | null = null;

  interface ContactData {
    name: string;
    email: string;
    message: string;
  }

  const contactMutation = createMutation(() => ({
    mutationFn: async (data: ContactData) => {
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      return result;
    },
    onSuccess: () => {
      success = true;
      formElement?.reset();
      toast.success('Message sent successfully!', {
        description: "I'll get back to you as soon as possible.",
      });
    },
    onError: (error: Error) => {
      toast.error('Failed to send message', {
        description: error.message || 'Something went wrong. Please try again.',
      });
    },
  }));

  async function handleSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    formElement = form;
    const formData = new FormData(form);
    
    const data: ContactData = {
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      message: formData.get('message')?.toString().trim() || '',
    };

    contactMutation.mutate(data);
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

          {#if contactMutation.isError}
            <p class="text-sm text-red-400">{contactMutation.error?.message || 'An error occurred'}</p>
          {/if}

          <div class="flex items-center justify-between gap-4">
            <button type="submit" class="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed" disabled={contactMutation.isPending}>
              <Mail class="w-4 h-4" />
              {#if contactMutation.isPending}Sending...{:else}Send message{/if}
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
