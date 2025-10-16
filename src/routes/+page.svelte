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

<div>
  <div
    class="wrapper linear-gradient-home flex flex-col flex-start items-center"
  >
    <!-- Hero Section -->
    <div
      class="w-full h-[100vh] absolute inset-0 bg-cover bg-center hero-background"
      style="background: url({hero}) no-repeat center center;background-size: cover;"
    ></div>

    <div class="flex flex-col items-center justify-center mt-20 mb-10 z-10">
      <div class="greeting-container prose">
        {#key key}
          <div
            class="greeting-wrapper"
            role="button"
            tabindex="0"
            onmouseenter={() => (showTooltip = true)}
            onmouseleave={() => (showTooltip = false)}
          >
            <h2
              class="text-5xl font-bold mb-2 greeting-text"
              in:fade={{ duration: 1800, delay: 200 }}
            >
              {greeting.text}..
            </h2>
            {#if showTooltip}
              <div
                class="tooltip"
                in:fade={{ duration: 100 }}
                out:fade={{ duration: 500 }}
              >
                {greeting.language}
              </div>
            {/if}
          </div>
        {/key}
      </div>
      <div>
        <h1 class="text-4xl font-bold">Rifky Adni Putra</h1>
      </div>
    </div>

    <Nav />

    <section class="hero-section mt-40 mb-40">
      <div class="hero-content flex flex-col items-center justify-center gap-6">
        <!-- About Me Section in Hero -->
        <LiquidGlass
          borderRadius="15px"
          width="fit-content"
          height="auto"
          type="div"
          background="black"
        >
          <div class="hero-about">
            <div class="about-content prose">
              <h3 class="font-serif text-white">About Me</h3>
              <p class="font-serif text-white">
                Passionate full-stack developer with expertise in modern web
                technologies. I love creating beautiful, functional, and
                user-friendly applications that solve real-world problems.
                Always eager to learn new technologies and contribute to
                innovative projects.
              </p>
              <p class="font-serif text-white">
                When offline you'll find me exploring seas, freediving for
                relaxation, and capturing moments through photography.
              </p>
              <!-- ID Card Toggle Button -->
            </div>
            <!-- ID Card Overlay -->
            {#if isFlipped}
              <div
                class="id-card-overlay"
                in:fade={{ duration: 300 }}
                out:fade={{ duration: 200 }}
              >
                <div class="id-card-modal">
                  <div class="id-card gap-2 px-6">
                    <div class="id-header">
                      <div class="id-logo">🌊</div>
                      <div class="id-title">Developer ID</div>
                    </div>
                    <div class="id-content">
                      <div class="id-photo">
                        <div class="photo-placeholder">RP</div>
                      </div>
                      <div class="id-details">
                        <div class="id-field">
                          <span class="id-label">Name:</span>
                          <span class="id-value">Rifky Adni Putra</span>
                        </div>
                        <div class="id-field">
                          <span class="id-label">Role:</span>
                          <span class="id-value">Full-Stack Developer</span>
                        </div>
                        <div class="id-field">
                          <span class="id-label">Level:</span>
                          <span class="id-value">Senior</span>
                        </div>
                        <div class="id-field">
                          <span class="id-label">Specialties:</span>
                          <span class="id-value">Web Dev, UI/UX</span>
                        </div>
                        <div class="id-field">
                          <span class="id-label">Status:</span>
                          <span class="id-value active">Active</span>
                        </div>
                      </div>
                    </div>
                    <div class="id-footer">
                      <div class="id-code">ID: DEV-2024-RP</div>
                      <div class="id-validity">Valid until 2030</div>
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
    <div class="cards-container mb-10 mt-10">
      <!-- Tech Stack Card -->
      <div class="glass-card" in:fade={{ duration: 800, delay: 600 }}>
        <div class="card-header">
          <h3 class="card-title">Tech Stack</h3>
          <div class="card-icon">�</div>
        </div>
        <div class="card-content">
          <TechStack />
        </div>
      </div>

      <!-- Why I Made This Website Card -->
      <div class="glass-card" in:fade={{ duration: 800, delay: 800 }}>
        <div class="card-header">
          <h3 class="card-title">Background Story</h3>
          <div class="card-icon">�</div>
        </div>
        <div class="card-content">
          <div class="why-item">
            <h4 class="font-bold">Need of Exploration</h4>
            <p class="text-lg">
              This website serves as my digital canvas, where I can experiment
              with bleeding edge web technologies and design trends. It's a
              space to push my skills, try out new ideas, and see what I can
              create. I'm constantly learning and evolving as a developer, and
              this site reflects that journey.
            </p>
          </div>
          <div class="why-item">
            <h4 class="font-bold">React Dissatisfaction</h4>
            <p class="text-lg">
              After years of working with React, I felt the need for a fresh
              start. React has been awesome and will continue to be a valuable
              tool in my toolkit, but SvelteKit offers a different approach that
              resonates with me right now. I wanted to explore its simplicity,
              performance, and developer experience.
            </p>
          </div>
          <div class="why-item">
            <h4 class="font-bold">Connection & Opportunities</h4>
            <p class="text-lg">
              Beyond showcasing my work, this website is my way of connecting
              with like-minded developers, potential collaborators, and anyone
              interested in the intersection of technology and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Q&A Section -->
    <div class="qa-section-container mb-10">
      <QASection />
    </div>
  </div>

  <!-- Footer (outside the wrapper but inside the background) -->
  <div class=" h-full w-full linear-gradient-home">
    <Footer />
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    color: white;
    z-index: 1;
  }

  .linear-gradient-home {
    background: linear-gradient(
      135deg,
      rgba(37, 80, 122, 0.9) 0%,
      rgba(6, 86, 112, 0.9) 25%,
      rgba(0, 85, 102, 0.9) 50%,
      rgba(0, 119, 136, 0.9) 75%,
      rgba(0, 153, 170, 0.9) 100%
    );
  }

  /* Hero Section Styles */
  .hero-section {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }

  .hero-content {
    max-width: 800px;
    width: 100%;
  }

  .hero-about {
    position: relative;
  }

  .hero-background {
    animation: filterCycle 4s ease-in-out infinite;
  }

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

  .about-content {
    border-radius: 40px;
    padding: 3rem;
  }

  /* ID Card Overlay Styles */
  .id-card-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color: rgba(82, 82, 82, 0.8);
    backdrop-filter: blur(5px);
  }

  .id-card-modal {
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .greeting-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .greeting-wrapper {
    position: relative;
    display: inline-block;
  }

  .greeting-text {
    text-align: center;
    background: linear-gradient(45deg, #fff, #e0e7ff, #c7d2fe);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .greeting-text:hover {
    transform: scale(1.05);
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
  }

  .tooltip {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    z-index: 1000;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.8);
  }

  /* Liquid Glass Cards Styles */
  .cards-container {
    max-width: 800px;
    width: 100%;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .glass-card {
    background: rgba(215, 212, 212, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(12px);
    border-radius: 40px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
  }

  .glass-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 40px;
    z-index: -1;
  }

  /* QA Section Container */
  .qa-section-container {
    max-width: 800px;
    width: 100%;
    padding: 0 2rem;
  }

  /* .glass-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  } */

  /* ID Card Styles */
  .id-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.1) 0%,
      rgba(147, 51, 234, 0.1) 100%
    );
    border-radius: 15px;
    overflow: hidden;
    position: relative;
  }

  .id-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
  }

  .id-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 0 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 1rem;
  }

  .id-logo {
    font-size: 1.5rem;
  }

  .id-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .id-content {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    flex: 1;
  }

  .id-photo {
    flex-shrink: 0;
  }

  .photo-placeholder {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }

  .id-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: left;
  }

  .id-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .id-field:last-child {
    border-bottom: none;
  }

  .id-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .id-value {
    font-size: 0.9rem;
    color: white;
    font-weight: 600;
  }

  .id-value.active {
    color: #10b981;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .id-value.active::before {
    content: "●";
    color: #10b981;
    animation: pulse 2s infinite;
  }

  .id-footer {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .id-code {
    font-family: "Courier New", monospace;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.1);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }

  .id-validity {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin: 0;
  }

  .card-icon {
    font-size: 2rem;
  }

  .card-content {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
  }

  .card-content p {
    margin-bottom: 1rem;
  }

  /* Project Items and Why Items */

  .why-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .cards-container {
      padding: 0 1rem;
      gap: 1.5rem;
    }

    .qa-section-container {
      padding: 0 1rem;
    }

    .glass-card {
      padding: 1.5rem;
    }

    .flip-btn {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }

    .id-content {
      flex-direction: column;
      gap: 1rem;
    }

    .id-photo {
      align-self: center;
    }

    .photo-placeholder {
      width: 60px;
      height: 60px;
      font-size: 1.2rem;
    }

    .id-field {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
      padding: 0.5rem 0;
    }

    .id-footer {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }

    .hero-section {
      padding: 1rem;
    }

    .about-content {
      padding: 2rem;
    }
  }

  @media (max-width: 480px) {
    .id-header {
      padding: 0.5rem 0;
    }

    .id-title {
      font-size: 0.9rem;
    }

    .photo-placeholder {
      width: 50px;
      height: 50px;
      font-size: 1rem;
    }

    .hero-section {
      padding: 0.5rem;
    }

    .about-content {
      padding: 1.5rem;
    }

    .qa-section-container {
      padding: 0 0.5rem;
    }
  }
</style>
