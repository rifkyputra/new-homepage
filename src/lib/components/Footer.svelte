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
  class="{className} pt-6 sm:pt-8 border-t border-white/20 px-2 sm:px-4"
  in:fade={{ duration: 800, delay: 1000 }}
>
  <div
    class="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 mx-auto max-w-6xl transition-all duration-300 hover:bg-white/8 hover:border-purple-600/30"
  >
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-4 sm:mb-6"
    >
      <!-- Navigation Links -->
      <div>
        <h3
          class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-200"
        >
          Navigation
        </h3>
        <ul class="space-y-1.5 sm:space-y-2">
          <li>
            <a
              href="/"
              class="text-gray-300 hover:text-purple-300 transition-colors text-sm sm:text-base"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/blog"
              class="text-gray-300 hover:text-purple-300 transition-colors text-sm sm:text-base"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="/my-projects"
              class="text-gray-300 hover:text-purple-300 transition-colors text-sm sm:text-base"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="/links"
              class="text-gray-300 hover:text-purple-300 transition-colors text-sm sm:text-base"
              >Contact</a
            >
          </li>
        </ul>
      </div>

      <!-- Quick Contact -->
      <div>
        <h3
          class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-200"
        >
          Let's Connect
        </h3>
        <p
          class="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed"
        >
          Interested in working together or have a question?
        </p>
        <a
          href="/links"
          class="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/50 hover:bg-purple-500/50 rounded-lg transition-colors text-xs sm:text-sm"
        >
          <ExternalLink class="w-3 h-3 sm:w-4 sm:h-4" />
          View All Links
        </a>
      </div>

      <!-- Tech Stack -->
      <div class="sm:col-span-2 lg:col-span-1">
        <h3
          class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-200"
        >
          Built With
        </h3>
        <div class="flex flex-wrap gap-1.5 sm:gap-2">
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
      class="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left"
    >
      <p class="text-gray-400 text-xs sm:text-sm">
        © 2025 Rifky Putra. All rights reserved.
      </p>
      <p class="text-gray-400 text-xs sm:text-sm">
        Made with ❤️ using modern web technologies
      </p>
    </div>
  </div>
</footer>
