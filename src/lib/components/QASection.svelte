<script lang="ts">
  import { fade, slide } from "svelte/transition";

  interface QAItem {
    question: string;
    answer: string;
    isOpen?: boolean;
  }

  let qaItems: QAItem[] = $state([
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in modern web technologies including SvelteKit, TypeScript, React, Node.js, and various databases. I'm passionate about creating performant, accessible, and user-friendly applications.",
      isOpen: false,
    },
    {
      question: "How can I contact you for project collaborations?",
      answer:
        "You can reach out to me through the contact form on this website, or connect with me on LinkedIn. I'm always open to discussing interesting projects and opportunities.",
      isOpen: false,
    },
    {
      question: "Do you work with remote teams?",
      answer:
        "Absolutely! I have extensive experience working with distributed teams across different time zones. I believe in clear communication, regular updates, and using the right tools to ensure smooth collaboration.",
      isOpen: false,
    },
    {
      question: "What's your approach to web development?",
      answer:
        "I follow a user-centered approach, focusing on performance, accessibility, and maintainable code. I believe in progressive enhancement, semantic HTML, and building applications that work well for everyone.",
      isOpen: false,
    },
    {
      question: "How do you stay updated with the latest technologies?",
      answer:
        "I regularly read tech blogs, participate in developer communities, contribute to open source projects, and experiment with new technologies in personal projects like this website. Continuous learning is essential in our field.",
      isOpen: false,
    },
    {
      question: "What's your experience with design systems?",
      answer:
        "I have experience building and maintaining design systems that ensure consistency across applications. I understand the importance of reusable components, design tokens, and documentation for scalable design systems.",
      isOpen: false,
    },
  ]);

  function toggleQuestion(index: number) {
    qaItems[index].isOpen = !qaItems[index].isOpen;
  }
</script>

<div class="w-full max-w-3xl mx-auto">
  <h2
    class="qa-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-8 bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent"
  >
    Frequently Asked Questions
  </h2>
  <div class="flex flex-col gap-4">
    {#each qaItems as item, index}
      <div
        class="bg-[rgba(215,212,212,0.01)] backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
        in:fade={{ duration: 600, delay: index * 100 }}
      >
        <button
          class="w-full p-4 sm:p-6 flex justify-between items-center bg-transparent border-none text-white text-base sm:text-lg font-semibold text-left cursor-pointer transition-all duration-300 hover:bg-white/5"
          onclick={() => toggleQuestion(index)}
          aria-expanded={item.isOpen}
        >
          <span class="flex-1 leading-relaxed">{item.question}</span>
          <span
            class="ml-3 sm:ml-4 transition-transform duration-300 text-white/70"
            class:rotate-180={item.isOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
        {#if item.isOpen}
          <div
            class="px-4 sm:px-6 pb-4 sm:pb-6 text-white/90 leading-relaxed border-t border-white/10"
            transition:slide={{ duration: 300 }}
          >
            <p class="m-0 pt-4 text-sm sm:text-base">{item.answer}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .qa-title {
    margin-bottom: 1.5rem;
    background: linear-gradient(90deg, #ffffff, #a78bfa, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  }
</style>
