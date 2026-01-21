<script lang="ts">
  import { Fish, Menu, X, Linkedin, Github } from "@lucide/svelte";
  import { onMount } from "svelte";

  let mobileMenuOpen = $state(false);
  let isMobile = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  onMount(() => {
    function checkIsMobile() {
      isMobile = window.innerWidth < 768;
      if (!isMobile) {
        mobileMenuOpen = false;
      }
    }

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  });
</script>

<nav
  class="portfolio-nav sticky top-0 py-4 bg-[#1b1b1b] border-b border-[#2a2a2a]"
  style="z-index: 99;"
>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="flex items-center justify-between w-full relative z-10">
      <!-- Left side - Navigation Links (Desktop) -->
      <ul class="hidden md:flex items-center gap-12 list-none m-0 p-0 z-10">
        <li>
          <a
            href="/"
            class="no-underline text-[#9c9c9c] hover:text-white transition-colors duration-300 text-sm font-['IBM_Plex_Mono'] tracking-[0.14px]"
            >Home</a
          >
        </li>
        <li>
          <a
            href="/my-projects"
            class="no-underline text-[#9c9c9c] hover:text-white transition-colors duration-300 text-sm font-['IBM_Plex_Mono'] tracking-[0.14px]"
            >Portfolio</a
          >
        </li>
        <li>
          <a
            href="/links"
            class="no-underline text-[#9c9c9c] hover:text-white transition-colors duration-300 text-sm font-['IBM_Plex_Mono'] tracking-[0.14px]"
            >Links</a
          >
        </li>
        <li>
          <a
            href="/blog"
            class="no-underline text-[#9c9c9c] hover:text-white transition-colors duration-300 text-sm font-['IBM_Plex_Mono'] tracking-[0.14px]"
            >Blog</a
          >
        </li>
        <li>
          <a
            href="/contact"
            class="no-underline text-[#9c9c9c] hover:text-white transition-colors duration-300 text-sm font-['IBM_Plex_Mono'] tracking-[0.14px]"
            >Contact</a
          >
        </li>
      </ul>

      <!-- Mobile menu button (Left side on mobile) -->
      <button
        class="flex items-center justify-center p-2 text-white bg-transparent border-none rounded-lg transition-colors duration-300 hover:bg-white/10 md:hidden z-10"
        onclick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {#if mobileMenuOpen}
          <X class="w-6 h-6" />
        {:else}
          <Menu class="w-6 h-6" />
        {/if}
      </button>

      <!-- Right side - Social Icons -->
      <div class="flex items-center gap-4 z-10">
        <a
          href="https://linkedin.com/in/rifptra"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#9c9c9c] hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin class="w-5 h-5" />
        </a>
        <a
          href="https://github.com/rifkyputra"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#9c9c9c] hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <Github class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>

  <!-- Mobile menu overlay -->
  {#if mobileMenuOpen && isMobile}
    <button
      type="button"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] animate-[fadeIn_0.3s_ease] border-0 p-0 cursor-pointer"
      onclick={closeMobileMenu}
      onkeydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
          closeMobileMenu();
        }
      }}
      aria-label="Close mobile menu"
    >
      <div
        class="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm bg-[#1b1b1b] backdrop-blur-xl border border-[#2a2a2a] rounded-xl p-6 shadow-2xl animate-[slideDown_0.3s_ease]"
        onclick={(e) => e.stopPropagation()}
        onkeydown={(e) => {
          if (e.key === 'Escape') {
            closeMobileMenu();
          }
        }}
        role="dialog"
        aria-label="Mobile navigation menu"
        tabindex="-1"
      >
        <ul class="flex flex-col gap-4 list-none m-0 p-0">
          <li>
            <a
              href="/"
              onclick={closeMobileMenu}
              class="block p-4 no-underline text-[#9c9c9c] hover:text-white text-center rounded-xl font-['IBM_Plex_Mono'] transition-colors duration-300 hover:bg-white/10"
              >Home</a
            >
          </li>
          
          <li>
            <a
              href="/my-projects"
              onclick={closeMobileMenu}
              class="block p-4 no-underline text-[#9c9c9c] hover:text-white text-center rounded-xl font-['IBM_Plex_Mono'] transition-colors duration-300 hover:bg-white/10"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              href="/links"
              onclick={closeMobileMenu}
              class="block p-4 no-underline text-[#9c9c9c] hover:text-white text-center rounded-xl font-['IBM_Plex_Mono'] transition-colors duration-300 hover:bg-white/10"
              >Links</a
            >
          </li>
          <li>
            <a
              href="/blog"
              onclick={closeMobileMenu}
              class="block p-4 no-underline text-[#9c9c9c] hover:text-white text-center rounded-xl font-['IBM_Plex_Mono'] transition-colors duration-300 hover:bg-white/10"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="/contact"
              onclick={closeMobileMenu}
              class="block p-4 no-underline text-[#9c9c9c] hover:text-white text-center rounded-xl font-['IBM_Plex_Mono'] bg-white/10 border border-white/25 transition-colors duration-300 hover:bg-white/20"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </button>
  {/if}
</nav>

<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap');

  /* Animation keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
