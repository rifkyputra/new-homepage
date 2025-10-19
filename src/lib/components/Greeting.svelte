<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";

  const introduceMyselfIn34Languages = [
    { text: "Hello, my name is", language: "English" },
    { text: "Hola, me llamo", language: "Spanish" },
    { text: "Bonjour, je m'appelle", language: "French" },
    { text: "Hallo, ich heiße", language: "German" },
    { text: "Ciao, mi chiamo", language: "Italian" },
    { text: "Olá, meu nome é", language: "Portuguese" },
    { text: "Привет, меня зовут", language: "Russian" },
    { text: "こんにちは、私の名前は", language: "Japanese" },
    { text: "你好，我叫", language: "Chinese (Simplified)" },
    { text: "안녕하세요, 제 이름은", language: "Korean" },
    { text: "مرحباً، اسمي", language: "Arabic" },
    { text: "Sampurasun, nami abdi", language: "Sundanese" },
    { text: "Saluton, mia nomo estas", language: "Esperanto" },
    { text: "Hej, jag heter", language: "Swedish" },
    { text: "Hei, nimeni on", language: "Finnish" },
    { text: "Salve, nomen mihi est", language: "Latin" },
    { text: "Cześć, nazywam się", language: "Polish" },
    { text: "Merhaba, benim adım", language: "Turkish" },
    { text: "Kia ora, ko au te", language: "Maori" },
  ];

  let randomIndex = Math.floor(
    Math.random() * introduceMyselfIn34Languages.length
  );
  let greeting = $state(introduceMyselfIn34Languages[randomIndex]);
  let key = $state(0); // Key to trigger transition
  let showTooltip = $state(false);
  let greetingInterval: number | null = null;

  function changeGreeting() {
    randomIndex = Math.floor(
      Math.random() * introduceMyselfIn34Languages.length
    );
    greeting = introduceMyselfIn34Languages[randomIndex];
    key += 1; // Update key to trigger transition
  }

  // Set up interval to keep changing greetings with proper cleanup
  onMount(() => {
    greetingInterval = setInterval(changeGreeting, 4000);
  });

  onDestroy(() => {
    if (greetingInterval) {
      clearInterval(greetingInterval);
    }
  });
</script>

<div class="greeting-container prose text-center">
  {#key key}
    <div
      class="greeting-wrapper relative inline-block"
      role="button"
      tabindex="0"
      aria-label="Show language information for greeting"
      onmouseenter={() => (showTooltip = true)}
      onmouseleave={() => (showTooltip = false)}
      onkeydown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showTooltip = !showTooltip;
        }
      }}
    >
      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 greeting-text cursor-pointer transition-transform duration-300 hover:scale-105"
        in:fade={{ duration: 1800, delay: 200 }}
        id="greeting-text"
        aria-describedby={showTooltip ? "greeting-tooltip" : undefined}
      >
        {greeting.text}..
      </h2>
      {#if showTooltip}
        <div
          id="greeting-tooltip"
          class="tooltip absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap z-50 backdrop-blur-sm border border-white/20"
          role="tooltip"
          aria-live="polite"
          in:fade={{ duration: 100 }}
          out:fade={{ duration: 500 }}
        >
          {greeting.language}
          <div
            class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-black/80"
          ></div>
        </div>
      {/if}
    </div>
  {/key}
</div>

<style>
  /* Greeting text gradient effect - complex gradient can't be done with Tailwind */
  .greeting-text {
    background: linear-gradient(45deg, #fff, #e0e7ff, #c7d2fe);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  }

  .greeting-text:hover {
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
  }
</style>
