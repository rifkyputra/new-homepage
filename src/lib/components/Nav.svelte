<script lang="ts">
  import { Fish } from "@lucide/svelte";
</script>

<nav class="liquid sticky top-3 py-9" style="z-index: 99;">
  <div class="logo-section relative">
    <!-- <img src="/logo.svg" alt="Logo" class="logo" /> -->
    <a href="/" class="flex items-center gap-2">
      <Fish class="w-7 h-7 rounded-lg" />
      <strong>Home</strong>
    </a>
  </div>
  <ul class="nav-list relative">
    <li><a href="/my-projects">My Projects</a></li>
    <li><a href="/links">Links</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
  <div class="actions relative">
    <!-- <input placeholder="Search" class="search-input" /> -->
    <a href="/contact" class="sign-in-btn">Contact me</a>
  </div>
</nav>

<style>
  .liquid {
    display: flex;
    align-items: center;
    isolation: isolate;
    justify-content: space-between;
    align-content: center;
    width: 900px;
    padding: 10px 28px;
    background: rgba(215, 212, 212, 0.08);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    border-radius: 48px;
    border: 0.2px solid rgba(162, 162, 162, 0.35);
    text-shadow: var(--glass-text-shadow, 0px 2px 4px rgba(0, 0, 0, 0.22));
  }
  .liquid::before {
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

  .liquid::after {
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

  .logo-section {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .logo-section a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.3s ease;
  }

  .logo-section a:hover {
    opacity: 0.8;
  }

  .nav-list {
    display: flex;
    gap: 18px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-list a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.3s ease;
  }

  .nav-list a:hover {
    opacity: 0.8;
  }

  .actions {
    display: flex;
    gap: 10px;
  }

  .sign-in-btn {
    padding: 8px 18px;
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  .sign-in-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }
</style>
