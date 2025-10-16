<script lang="ts">
  import { ExternalLink } from "@lucide/svelte";
  import { fade } from "svelte/transition";
  interface Props {
    class?: string;
  }
  let { class: className }: Props = $props();
</script>

<!-- Footer -->
<footer
  class="{className} pt-8 border-t border-white/20"
  in:fade={{ duration: 800, delay: 1000 }}
>
  <div
    class="footer-content bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
      <!-- Navigation Links -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-purple-200">Navigation</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="/"
              class="text-gray-300 hover:text-purple-300 transition-colors"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/blog"
              class="text-gray-300 hover:text-purple-300 transition-colors"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="/my-projects"
              class="text-gray-300 hover:text-purple-300 transition-colors"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="/links"
              class="text-gray-300 hover:text-purple-300 transition-colors"
              >Contact</a
            >
          </li>
        </ul>
      </div>

      <!-- Quick Contact -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-purple-200">
          Let's Connect
        </h3>
        <p class="text-gray-300 text-sm mb-4">
          Interested in working together or have a question?
        </p>
        <a
          href="/links"
          class="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/50 hover:bg-purple-500/50 rounded-lg transition-colors text-sm"
        >
          <ExternalLink class="w-4 h-4" />
          View All Links
        </a>
      </div>

      <!-- Tech Stack -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-purple-200">Built With</h3>
        <div class="flex flex-wrap gap-2">
          <span
            class="px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs"
          >
            SvelteKit
          </span>
          <span
            class="px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs"
          >
            TypeScript
          </span>
          <span
            class="px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs"
          >
            Tailwind CSS
          </span>
          <span
            class="px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs"
          >
            Vite
          </span>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div
      class="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
    >
      <p class="text-gray-400 text-sm">
        © 2025 Rifky Putra. All rights reserved.
      </p>
      <p class="text-gray-400 text-sm mt-2 md:mt-0">
        Made with ❤️ using modern web technologies
      </p>
    </div>
  </div>
</footer>

<style>
  .footer-content {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-content:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(147, 51, 234, 0.3);
  }
</style>
