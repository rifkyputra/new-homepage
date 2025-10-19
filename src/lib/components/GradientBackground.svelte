<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
    class?: string;
  }

  let { children, class: className = "" }: Props = $props();
</script>

<div class="gradient-background {className}">
  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  .gradient-background {
    min-height: 100vh;
    background: radial-gradient(
      circle,
      rgba(37, 80, 122, 0.9) 0%,
      rgba(6, 86, 112, 0.9) 25%,
      rgba(0, 85, 102, 0.9) 50%,
      rgba(0, 119, 136, 0.9) 75%,
      rgba(0, 153, 170, 0.9) 100%
    );
    /* Alternative implementation using Tailwind classes for consistency: */
    /* Use this class instead if you prefer Tailwind: bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 */
  }

  /* For pages that use the slate-purple gradient variant */
  .gradient-background.variant-purple {
    background: radial-gradient(
      circle at top left,
      #1a253eff 0%,
      #364e8cff 50%,
      #0f172a 100%
    );
  }
</style>