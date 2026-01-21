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

<div class={className}>
  {#if success}
    <div class="bg-[#f8f8f8] backdrop-blur-sm rounded-2xl p-6 border border-[#d8d8d8] text-center">
      <h2 class="text-2xl font-bold mb-2 text-[#080808]">Thanks — message sent</h2>
      <p class="text-[#9c9c9c]">I'll reply to you shortly.</p>
    </div>
  {:else}
    <form onsubmit={handleSubmit} class="space-y-4" bind:this={formElement}>
      <div>
        <label for="name" class="block text-xs font-semibold font-['IBM_Plex_Mono'] text-[#080808] mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          class="w-full px-4 py-2 bg-[#f8f8f8] border border-[#d8d8d8] rounded text-xs font-['IBM_Plex_Mono'] text-[#080808] placeholder:text-[#757575] focus:outline-none focus:border-[#3f8e00]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label for="email" class="block text-xs font-semibold font-['IBM_Plex_Mono'] text-[#080808] mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          class="w-full px-4 py-2 bg-[#f8f8f8] border border-[#d8d8d8] rounded text-xs font-['IBM_Plex_Mono'] text-[#080808] placeholder:text-[#757575] focus:outline-none focus:border-[#3f8e00]"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label for="message" class="block text-xs font-semibold font-['IBM_Plex_Mono'] text-[#080808] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          class="w-full px-4 py-2 bg-[#f8f8f8] border border-[#d8d8d8] rounded text-xs font-['IBM_Plex_Mono'] text-[#080808] placeholder:text-[#757575] focus:outline-none focus:border-[#3f8e00] resize-none"
          placeholder="Your message..."
        ></textarea>
      </div>

      {#if contactMutation.isError}
        <p class="text-sm text-red-500 font-['IBM_Plex_Mono']">
          {contactMutation.error?.message || 'An error occurred'}
        </p>
      {/if}

      <button
        type="submit"
        class="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#3f8e00] hover:bg-[#2d6600] border border-[#62ba1b] rounded text-white font-bold font-['IBM_Plex_Mono'] text-sm shadow-[0px_8px_30px_0px_rgba(63,142,0,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={contactMutation.isPending}
      >
        <Mail class="w-4 h-4" />
        {#if contactMutation.isPending}
          Sending...
        {:else}
          Submit
        {/if}
      </button>
    </form>
  {/if}
</div>
