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

<div class="qa-container">
  <h2 class="qa-title">Frequently Asked Questions</h2>
  <div class="qa-list">
    {#each qaItems as item, index}
      <div class="qa-item" in:fade={{ duration: 600, delay: index * 100 }}>
        <button
          class="qa-question"
          onclick={() => toggleQuestion(index)}
          aria-expanded={item.isOpen}
        >
          <span class="question-text">{item.question}</span>
          <span class="question-icon" class:rotated={item.isOpen}>
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
          <div class="qa-answer" transition:slide={{ duration: 300 }}>
            <p>{item.answer}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .qa-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .qa-title {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #fff, #e0e7ff, #c7d2fe);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  }

  .qa-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .qa-item {
    background: rgba(215, 212, 212, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .qa-item:hover {
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .qa-question {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .qa-question:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .question-text {
    flex: 1;
    line-height: 1.4;
  }

  .question-icon {
    margin-left: 1rem;
    transition: transform 0.3s ease;
    color: rgba(255, 255, 255, 0.7);
  }

  .question-icon.rotated {
    transform: rotate(180deg);
  }

  .qa-answer {
    padding: 0 1.5rem 1.5rem 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .qa-answer p {
    margin: 0;
    padding-top: 1rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .qa-title {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }

    .qa-question {
      padding: 1rem;
      font-size: 1rem;
    }

    .qa-answer {
      padding: 0 1rem 1rem 1rem;
      font-size: 0.95rem;
    }

    .question-icon {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    .qa-title {
      font-size: 1.5rem;
    }

    .qa-question {
      padding: 0.75rem;
      font-size: 0.95rem;
    }

    .qa-answer {
      padding: 0 0.75rem 0.75rem 0.75rem;
      font-size: 0.9rem;
    }
  }
</style>
