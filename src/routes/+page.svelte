<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import {
    Nav,
    LiquidGlass,
    Footer,
    TechStack,
    QASection,
    GradientBackground,
    Greeting,
  } from "$lib/components";
  import hero from "$lib/assets/hero.jpg";

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Set up auto-flip (removed greeting interval since it's now in Greeting component)
  onMount(() => {
    // Nav wrapper animation
    gsap.from(".nav-gsap-wrapper", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.5
    });

    // Hero section animations
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });

    gsap.from(".hero-background", {
      scale: 1.2,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });

    // Animate the about section with liquid glass
    gsap.from(".about-section", {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out"
    });

    

    // Animate Q&A section
    gsap.from(".qa-section", {
      scrollTrigger: {
        trigger: ".qa-section",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out"
    });

    // Parallax effect for hero background
    gsap.to(".hero-background", {
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 200,
      ease: "none"
    });
  });

  onDestroy(() => {
    // Clean up ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  });
</script>

<div class="relative">
  <div
    class="wrapper bg-gradient-to-br from-[rgba(37,80,122,0.9)] via-[rgba(6,86,112,0.9)] via-25% via-[rgba(0,85,102,0.9)] via-50% via-[rgba(0,119,136,0.9)] via-75% to-[rgba(0,153,170,0.9)] flex flex-col items-center relative w-full min-h-screen text-white z-[1]"
  >
    <!-- Hero Section -->
    <div
      class="hero-background w-full h-[calc(60vh+8rem)] lg:h-[calc(100vh-8rem)] absolute inset-0 bg-cover bg-center animate-[filterCycle_4s_ease-in-out_infinite]"
      style="background: url({hero}) no-repeat center center;background-size: cover;"
    ></div>

    <div
      class="hero-title flex flex-col items-center justify-center mt-20 mb-10 z-10 px-4"
    >
      <Greeting />
      <div class="text-center px-4">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">
          Rifky Adni Putra
        </h1>
      </div>
    </div>

    <div class="nav-gsap-wrapper w-full sticky top-3 z-[99]">
      <Nav />
    </div>

    <main>
      <section
        class="about-section w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-40 mb-16 sm:mb-24 lg:mb-40"
        aria-labelledby="about-section-title"
      >
      <div
        class="flex flex-col items-center justify-center gap-6 max-w-4xl w-full"
      >
        <!-- About Me Section in Hero -->
        <div class="md:max-w-[700px] w-full">
          <LiquidGlass
            borderRadius="15px"
            width="calc(100% - 10px)"
            height="auto"
            type="div"
            background="black"
          >
            <div class="about-content min-h-[30vh] prose p-6 sm:p-8 lg:p-12 rounded-[40px]">
              <h3
                id="about-section-title"
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
          </LiquidGlass>
        </div>

        
      </div>
    </section>

    <!-- Cards Section - Only Tech Stack and Projects -->
    <section
      class="max-w-4xl w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16 mt-8 sm:mt-12 lg:mt-16"
      aria-labelledby="cards-section-title"
    >
      <h2 id="cards-section-title" class="sr-only">Skills and Background</h2>
      <!-- Tech Stack Card -->
      <div
        class="glass-card bg-[rgba(215,212,212,0.01)] border border-white/25 backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-[40px] p-4 sm:p-6 lg:p-8 shadow-lg shadow-black/10 transition-all duration-300 relative"
        in:fade={{ duration: 800, delay: 100 }}
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
    </section>

    <!-- Q&A Section -->
    <section class="qa-section max-w-4xl w-full px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
      <QASection />
    </section>
    </main>
  </div>

  <!-- Footer (outside the wrapper but inside the background) -->
  <GradientBackground>
    <Footer />
  </GradientBackground>
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
