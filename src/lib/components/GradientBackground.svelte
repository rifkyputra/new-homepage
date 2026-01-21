<script lang="ts">
  import { themeStore, type BackgroundVariant } from '$lib/stores/theme.svelte';
  import { onMount } from 'svelte';

  interface Props {
    children?: import('svelte').Snippet;
    class?: string;
    variant?: BackgroundVariant;
  }

  let { children, class: className = "", variant = 'bw' }: Props = $props();

  onMount(() => {
    themeStore.setVariant(variant);
  });
</script>

<div class="gradient-background {className}" style="background: {themeStore.gradientStyle}">
  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  .gradient-background {
    min-height: 100vh;
  }
</style>