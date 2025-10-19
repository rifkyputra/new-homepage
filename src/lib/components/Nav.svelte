<script lang="ts">
  import { Fish, Menu, X } from "@lucide/svelte";
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
  class="glass-nav sticky top-3 py-9 mx-2 sm:mx-4 md:mx-auto"
  style="z-index: 99;"
>
  <div class="flex items-center justify-between w-full relative z-10">
    <!-- Logo section -->
    <div class="flex items-center gap-2.5">
      <a
        href="/"
        class="flex items-center gap-2 no-underline text-white transition-opacity duration-300 hover:opacity-80"
        onclick={closeMobileMenu}
      >
        <Fish class="w-7 h-7 rounded-lg" />
        <strong class="hidden sm:block">Home</strong>
      </a>
    </div>

    <!-- Mobile menu button -->
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

    <!-- Desktop navigation -->
    <ul class="hidden md:flex items-center gap-4 list-none m-0 p-0 z-10">
      <li>
        <a
          href="/my-projects"
          class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap"
          >My Projects</a
        >
      </li>
      <li>
        <a
          href="/links"
          class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap"
          >Links</a
        >
      </li>
      <li>
        <a
          href="/blog"
          class="no-underline text-white transition-opacity duration-300 hover:opacity-80 whitespace-nowrap"
          >Blog</a
        >
      </li>
    </ul>

    <!-- Desktop actions -->
    <div class="hidden md:flex items-center gap-2.5 z-10">
      <a
        href="/contact"
        class="px-4 py-2 rounded-full border border-white/25 no-underline text-white whitespace-nowrap transition-all duration-300 hover:bg-white/10 hover:border-white/40"
        >Contact me</a
      >
    </div>
  </div>

  <!-- Mobile menu overlay -->
  {#if mobileMenuOpen && isMobile}
    <button
      type="button"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] animate-[fadeIn_0.3s_ease] border-0 p-0 cursor-pointer"
      onclick={closeMobileMenu}
      aria-label="Close mobile menu"
    >
      <div
        class="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm bg-[rgba(215,212,212,0.95)] backdrop-blur-xl border border-white/25 rounded-xl p-6 shadow-2xl animate-[slideDown_0.3s_ease]"
        onclick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <ul class="flex flex-col gap-4 list-none m-0 p-0">
          <li>
            <a
              href="/my-projects"
              onclick={closeMobileMenu}
              class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10"
              >My Projects</a
            >
          </li>
          <li>
            <a
              href="/links"
              onclick={closeMobileMenu}
              class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10"
              >Links</a
            >
          </li>
          <li>
            <a
              href="/blog"
              onclick={closeMobileMenu}
              class="block p-4 no-underline text-white text-center rounded-xl font-medium transition-colors duration-300 hover:bg-white/10"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="/contact"
              onclick={closeMobileMenu}
              class="block p-4 no-underline text-white text-center rounded-xl font-medium bg-white/10 border border-white/25 transition-colors duration-300 hover:bg-white/20"
              >Contact me</a
            >
          </li>
        </ul>
      </div>
    </button>
  {/if}
</nav>

<style>
  /* Glass nav styling - complex effects that can't be replicated with Tailwind */
  .glass-nav {
    display: flex;
    align-items: center;
    isolation: isolate;
    justify-content: space-between;
    align-content: center;
    width: min(900px, calc(100vw - 2rem));
    max-width: 900px;
    padding: 10px 28px;
    background: rgba(215, 212, 212, 0.08);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    border-radius: 48px;
    border: 0.2px solid rgba(162, 162, 162, 0.35);
    text-shadow: var(--glass-text-shadow, 0px 2px 4px rgba(0, 0, 0, 0.22));
  }

  .glass-nav::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: inherit;
    box-shadow: var(--glass-box-shadow, inset 0 0 12px -5px #b59c9c);
    background-color: var(--glass-bg, rgba(18, 17, 17, 0.08));
    backdrop-filter: var(--glass-backdrop-blur, blur(10px));
    -webkit-backdrop-filter: var(--glass-backdrop-blur, blur(10px));
  }

  .glass-nav::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    backdrop-filter: var(--glass-after-backdrop-blur, blur(0px));
    -webkit-backdrop-filter: var(--glass-after-backdrop-blur, blur(0px));
    filter: url(#glass-distortion);
    -webkit-filter: url(#glass-distortion);
  }

  /* Mobile responsive padding - Tailwind can't handle complex width calculations */
  @media (max-width: 768px) {
    .glass-nav {
      padding: 8px 16px;
    }
  }

  @media (max-width: 480px) {
    .glass-nav {
      padding: 6px 12px;
    }
  }
</style>
