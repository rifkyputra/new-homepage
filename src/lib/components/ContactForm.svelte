<script lang="ts">
  import { Mail } from "@lucide/svelte";
  import { createMutation } from '@tanstack/svelte-query';
  import { toast } from 'svelte-sonner';
  import { dev } from '$app/environment';

  const BACKEND_URL = dev 
    ? 'http://localhost:8787' 
    : 'https://rifky-backend.rifqempul.workers.dev';

  interface Props {
    onSuccess?: () => void;
    class?: string;
  }

  let { onSuccess, class: className = '' }: Props = $props();

  let formElement: HTMLFormElement | null = $state(null);
  let success = $state(false);

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
      onSuccess?.();
    },
    onError: (error: Error) => {
      toast.error('Failed to send message', {
        description: error.message || 'Something went wrong. Please try again.',
      });
    },
  }));

  function handleSubmit(event: Event) {
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

<div class="{className} w-full">
  {#if success}
    <div class="glass-card bg-[var(--color-success-900)]/20 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-[var(--color-success-500)]/30 text-center shadow-[0_0_30px_rgba(34,197,94,0.1)]">
      <div class="w-16 h-16 rounded-full bg-[var(--color-success-500)]/20 flex items-center justify-center mx-auto mb-6">
        <Mail class="w-8 h-8 text-[var(--color-success-400)]" />
      </div>
      <h2 class="text-3xl font-bold mb-3 text-white tracking-tight">Message Sent</h2>
      <p class="text-[var(--text-on-glass-secondary)] text-lg font-light">Thanks for reaching out. I'll get back to you shortly.</p>
    </div>
  {:else}
    <form onsubmit={handleSubmit} class="space-y-6" bind:this={formElement}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Name Field -->
        <div class="space-y-2">
          <label for="name" class="block text-sm font-semibold text-[var(--text-on-glass-secondary)] tracking-wide">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="w-full px-5 py-4 bg-[var(--glass-bg-dark)] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#62ba1b] focus:ring-1 focus:ring-[#62ba1b]/50 transition-all duration-300"
            placeholder="Jane Doe"
          />
        </div>

        <!-- Email Field -->
        <div class="space-y-2">
          <label for="email" class="block text-sm font-semibold text-[var(--text-on-glass-secondary)] tracking-wide">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-5 py-4 bg-[var(--glass-bg-dark)] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#62ba1b] focus:ring-1 focus:ring-[#62ba1b]/50 transition-all duration-300"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <!-- Message Field -->
      <div class="space-y-2">
        <label for="message" class="block text-sm font-semibold text-[var(--text-on-glass-secondary)] tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          class="w-full px-5 py-4 bg-[var(--glass-bg-dark)] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#62ba1b] focus:ring-1 focus:ring-[#62ba1b]/50 transition-all duration-300 resize-none"
          placeholder="How can I help you?"
        ></textarea>
      </div>

      {#if contactMutation.isError}
        <div class="p-4 bg-[var(--color-error-900)]/20 border border-[var(--color-error-500)]/30 rounded-xl">
          <p class="text-sm text-[var(--color-error-400)] font-medium text-center">
            {contactMutation.error?.message || 'An error occurred'}
          </p>
        </div>
      {/if}

      <button
        type="submit"
        class="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#3f8e00] hover:bg-[#2d6600] border border-[#62ba1b] rounded-xl text-white font-bold text-lg shadow-[0_0_30px_rgba(63,142,0,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
        disabled={contactMutation.isPending}
      >
        <Mail class="w-5 h-5" />
        {#if contactMutation.isPending}
          Sending...
        {:else}
          Send Message
        {/if}
      </button>
    </form>
  {/if}
</div>
