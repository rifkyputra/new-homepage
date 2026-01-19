<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import { Toaster } from 'svelte-sonner';

  let { children } = $props();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Rifky Putra - Full Stack Developer & Software Engineer</title>
  <meta
    name="description"
    content="Full Stack Developer specializing in modern web technologies including React, SvelteKit, TypeScript, and Node.js. Building innovative web applications and user experiences."
  />
</svelte:head>

<Toaster richColors position="top-right" />

<QueryClientProvider client={queryClient}>
  {@render children?.()}
</QueryClientProvider>

<!-- SVG Filters for Liquid Glass Effect -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <defs>
    <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.007 0.007"
        numOctaves="2"
        seed="92"
        result="noise"
      />
      <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="blurred"
        scale="77"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </defs>
</svg>
