<script lang="ts">
  import { fade } from "svelte/transition";
  import {
    Nav,
    LiquidGlass,
    Footer,
    TechStack,
    QASection,
  } from "$lib/components";
  import hero from "$lib/assets/hero.jpg";

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
  // Flip card state
  let isFlipped = $state(false);
  let autoFlipInterval = $state(null);

  // Function to toggle flip card
  function toggleFlip() {
    isFlipped = !isFlipped;
    // Clear auto-flip when manually controlled
    if (autoFlipInterval) {
      clearInterval(autoFlipInterval);
      autoFlipInterval = null;
    }
  }

  // Function to flip to front
  function flipToFront() {
    isFlipped = false;
  }

  // Function to flip to back
  function flipToBack() {
    isFlipped = true;
  }

  // Function to stop auto-flip
  function stopAutoFlip() {
    if (autoFlipInterval) {
      clearInterval(autoFlipInterval);
      autoFlipInterval = null;
    }
  }

  // Expose functions to global scope for console control
  if (typeof window !== "undefined") {
    (window as any).flipCard = {
      toggle: toggleFlip,
      toFront: flipToFront,
      toBack: flipToBack,
      stopAuto: stopAutoFlip,
      getState: () => isFlipped,
    };
  }

  function changeGreeting() {
    randomIndex = Math.floor(
      Math.random() * introduceMyselfIn34Languages.length
    );
    greeting = introduceMyselfIn34Languages[randomIndex];
    key += 1; // Update key to trigger transition
  }

  // Set up interval to keep changing greetings
  setInterval(changeGreeting, 4400);
</script>

<div class="relative">
  <div
    class="wrapper bg-gradient-to-br from-[rgba(37,80,122,0.9)] via-[rgba(6,86,112,0.9)] via-25% via-[rgba(0,85,102,0.9)] via-50% via-[rgba(0,119,136,0.9)] via-75% to-[rgba(0,153,170,0.9)] flex flex-col items-center relative w-full min-h-screen text-white z-[1]"
  >
    <!-- Hero Section -->
    <div
      class="w-full h-screen absolute inset-0 bg-cover bg-center animate-[filterCycle_4s_ease-in-out_infinite]"
      style="background: url({hero}) no-repeat center center;background-size: cover;"
    ></div>

    <div
      class="flex flex-col items-center justify-center mt-20 mb-10 z-10 px-4"
    >
      <div class="greeting-container prose text-center">
        {#key key}
          <div
            class="greeting-wrapper relative inline-block"
            role="button"
            tabindex="0"
            onmouseenter={() => (showTooltip = true)}
            onmouseleave={() => (showTooltip = false)}
          >
            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 greeting-text cursor-pointer transition-transform duration-300 hover:scale-105"
              in:fade={{ duration: 1800, delay: 200 }}
            >
              {greeting.text}..
            </h2>
            {#if showTooltip}
              <div
                class="tooltip absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap z-50 backdrop-blur-sm border border-white/20"
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
      <div class="text-center px-4">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">
          Rifky Adni Putra
        </h1>
      </div>
    </div>

    <Nav />

    <section
      class="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-40 mb-16 sm:mb-24 lg:mb-40"
    >
      <div
        class="flex flex-col items-center justify-center gap-6 max-w-4xl w-full"
      >
        <!-- About Me Section in Hero -->
        <LiquidGlass
          borderRadius="15px"
          width="fit-content"
          height="auto"
          type="div"
          background="black"
        >
          <div class="hero-about relative">
            <div class="about-content prose p-6 sm:p-8 lg:p-12 rounded-[40px]">
              <h3
                class="font-serif text-white text-lg sm:text-xl lg:text-2xl mb-4"
              >
                About Me
              </h3>
              <p
                class="font-serif text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-4"
              >
                Passionate full-stack developer with expertise in modern web
                technologies. I love creating beautiful, functional, and
                user-friendly applications that solve real-world problems.
                Always eager to learn new technologies and contribute to
                innovative projects.
              </p>
              <p
                class="font-serif text-white text-sm sm:text-base lg:text-lg leading-relaxed"
              >
                When offline you'll find me exploring seas, freediving for
                relaxation, and capturing moments through photography.
              </p>
            </div>
            <!-- ID Card Overlay -->
            {#if isFlipped}
              <div
                class="fixed inset-0 flex items-center justify-center z-[1000] bg-gray-500/80 backdrop-blur-sm"
                in:fade={{ duration: 300 }}
                out:fade={{ duration: 200 }}
              >
                <div class="w-full max-h-[90vh] overflow-y-auto p-4">
                  <div
                    class="id-card flex flex-col gap-2 px-4 sm:px-6 max-w-md mx-auto bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl border-t-4 border-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 relative"
                  >
                    <div
                      class="flex items-center justify-center gap-2 py-4 sm:py-6 border-b border-white/20 mb-4"
                    >
                      <div class="text-2xl">🌊</div>
                      <div
                        class="text-base sm:text-lg font-semibold text-white uppercase tracking-wide"
                      >
                        Developer ID
                      </div>
                    </div>
                    <div
                      class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start flex-1"
                    >
                      <div class="flex-shrink-0 self-center sm:self-start">
                        <div
                          class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold text-white shadow-lg shadow-blue-500/30"
                        >
                          RP
                        </div>
                      </div>
                      <div class="flex-1 flex flex-col gap-3 text-left w-full">
                        <div
                          class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-b border-white/10 gap-1"
                        >
                          <span
                            class="text-xs text-white/70 font-medium uppercase tracking-wider"
                            >Name:</span
                          >
                          <span
                            class="text-sm sm:text-base text-white font-semibold"
                            >Rifky Adni Putra</span
                          >
                        </div>
                        <div
                          class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-b border-white/10 gap-1"
                        >
                          <span
                            class="text-xs text-white/70 font-medium uppercase tracking-wider"
                            >Role:</span
                          >
                          <span
                            class="text-sm sm:text-base text-white font-semibold"
                            >Full-Stack Developer</span
                          >
                        </div>
                        <div
                          class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-b border-white/10 gap-1"
                        >
                          <span
                            class="text-xs text-white/70 font-medium uppercase tracking-wider"
                            >Level:</span
                          >
                          <span
                            class="text-sm sm:text-base text-white font-semibold"
                            >Senior</span
                          >
                        </div>
                        <div
                          class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-b border-white/10 gap-1"
                        >
                          <span
                            class="text-xs text-white/70 font-medium uppercase tracking-wider"
                            >Specialties:</span
                          >
                          <span
                            class="text-sm sm:text-base text-white font-semibold"
                            >Web Dev, UI/UX</span
                          >
                        </div>
                        <div
                          class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 gap-1"
                        >
                          <span
                            class="text-xs text-white/70 font-medium uppercase tracking-wider"
                            >Status:</span
                          >
                          <span
                            class="text-sm sm:text-base text-green-400 font-semibold flex items-center gap-1"
                          >
                            <span
                              class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                            ></span>
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="mt-auto pt-4 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-2 text-center"
                    >
                      <div
                        class="font-mono text-xs text-white/60 bg-white/10 px-2 py-1 rounded"
                      >
                        ID: DEV-2024-RP
                      </div>
                      <div class="text-xs text-white/60">Valid until 2030</div>
                    </div>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </LiquidGlass>

        <LiquidGlass
          type="button"
          width="280px"
          height="60px"
          borderRadius="30px"
          onClick={toggleFlip}
          class="mt-6"
        >
          {isFlipped ? "Hide" : "Reveal"}
        </LiquidGlass>
      </div>
    </section>

    <!-- Cards Section - Only Tech Stack and Projects -->
    <div
      class="max-w-4xl w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16 mt-8 sm:mt-12 lg:mt-16"
    >
      <!-- Tech Stack Card -->
      <div
        class="glass-card bg-[rgba(215,212,212,0.01)] border border-white/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-[40px] p-4 sm:p-6 lg:p-8 shadow-lg shadow-black/10 transition-all duration-300 relative"
        in:fade={{ duration: 800, delay: 600 }}
      >
        <div class="flex justify-between items-center mb-4 sm:mb-6">
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white m-0">
            Tech Stack
          </h3>
          <div class="text-2xl sm:text-3xl lg:text-4xl">🛠️</div>
        </div>
        <div class="text-white/90 leading-relaxed">
          <TechStack />
        </div>
      </div>

      <!-- Why I Made This Website Card -->
      <div
        class="glass-card bg-[rgba(215,212,212,0.01)] border border-white/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-[40px] p-4 sm:p-6 lg:p-8 shadow-lg shadow-black/10 transition-all duration-300 relative"
        in:fade={{ duration: 800, delay: 800 }}
      >
        <div class="flex justify-between items-center mb-4 sm:mb-6">
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white m-0">
            Background Story
          </h3>
          <div class="text-2xl sm:text-3xl lg:text-4xl">📖</div>
        </div>
        <div class="text-white/90 leading-relaxed">
          <div class="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/10">
            <h4 class="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3">
              Need of Exploration
            </h4>
            <p class="text-sm sm:text-base lg:text-lg leading-relaxed">
              This website serves as my digital canvas, where I can experiment
              with bleeding edge web technologies and design trends. It's a
              space to push my skills, try out new ideas, and see what I can
              create. I'm constantly learning and evolving as a developer, and
              this site reflects that journey.
            </p>
          </div>
          <div class="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/10">
            <h4 class="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3">
              React Dissatisfaction
            </h4>
            <p class="text-sm sm:text-base lg:text-lg leading-relaxed">
              After years of working with React, I felt the need for a fresh
              start. React has been awesome and will continue to be a valuable
              tool in my toolkit, but SvelteKit offers a different approach that
              resonates with me right now. I wanted to explore its simplicity,
              performance, and developer experience.
            </p>
          </div>
          <div class="mb-0">
            <h4 class="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3">
              Connection & Opportunities
            </h4>
            <p class="text-sm sm:text-base lg:text-lg leading-relaxed">
              Beyond showcasing my work, this website is my way of connecting
              with like-minded developers, potential collaborators, and anyone
              interested in the intersection of technology and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Q&A Section -->
    <div class="max-w-4xl w-full px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
      <QASection />
    </div>
  </div>

  <!-- Footer (outside the wrapper but inside the background) -->
  <div
    class="h-full w-full bg-gradient-to-br from-[rgba(37,80,122,0.9)] via-[rgba(6,86,112,0.9)] via-25% via-[rgba(0,85,102,0.9)] via-50% via-[rgba(0,119,136,0.9)] via-75% to-[rgba(0,153,170,0.9)]"
  >
    <Footer />
  </div>
</div>

<style>
  /* Custom animations that can't be replicated with Tailwind */
  @keyframes filterCycle {
    0% {
      filter: hue-rotate(4deg) saturate(1) brightness(0.89);
    }
    25% {
      filter: hue-rotate(13deg) saturate(1.5) brightness(0.895);
    }
    50% {
      filter: hue-rotate(25deg) saturate(2) brightness(1);
    }
    75% {
      filter: hue-rotate(13deg) saturate(1.5) brightness(0.895);
    }
    100% {
      filter: hue-rotate(4deg) saturate(1) brightness(0.89);
    }
  }

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

  /* Glass card pseudo-element - can't be done with Tailwind */
  .glass-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    z-index: -1;
  }
</style>
