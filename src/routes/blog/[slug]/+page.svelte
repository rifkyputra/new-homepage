<script lang="ts">
  import { Calendar, Clock, ArrowLeft, Share2 } from "@lucide/svelte";
  import { fade } from "svelte/transition";
  import { formatDate } from "$lib/blog";
  import type { PageData } from "./$types";
  import { Nav } from "$lib/components";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  const { post } = data;
</script>

<svelte:head>
  <title>{post.metadata.title} - Rifky Putra</title>
  <meta name="description" content={post.metadata.excerpt} />
  <meta property="og:title" content={post.metadata.title} />
  <meta property="og:description" content={post.metadata.excerpt} />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={post.metadata.title} />
  <meta name="twitter:description" content={post.metadata.excerpt} />
</svelte:head>

<div
  class="min-h-screen bg-gradient-to-br from-slate-800 to-slate-700 text-white"
>
  <!-- Navigation -->
  <div class="flex justify-center pt-8">
    <Nav />
  </div>

  <!-- Main Content -->
  <main class="container mx-auto px-6 py-12">
    <!-- Back Button -->
    <div class="mb-8" in:fade={{ duration: 600 }}>
      <a
        href="/blog"
        class="inline-flex items-center gap-2 text-gray-300 hover:text-gray-200 transition-colors"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to Blog
      </a>
    </div>

    <!-- Article Header -->
    <article class="max-w-4xl mx-auto">
      <header class="mb-12" in:fade={{ duration: 800, delay: 200 }}>
        <div class="flex flex-wrap gap-2 mb-4">
          {#each post.metadata.tags as tag}
            <span
              class="px-3 py-1 bg-slate-500/30 text-gray-200 rounded-full text-sm"
            >
              {tag}
            </span>
          {/each}
        </div>

        <h1
          class="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          {post.metadata.title}
        </h1>

        <p class="text-xl text-gray-300 mb-8 leading-relaxed">
          {post.metadata.excerpt}
        </p>

        <div
          class="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-white/20"
        >
          <div class="flex items-center gap-6 text-gray-300">
            <div class="flex items-center gap-2">
              <Calendar class="w-5 h-5" />
              <span>{formatDate(post.metadata.date)}</span>
            </div>
            <div class="flex items-center gap-2">
              <Clock class="w-5 h-5" />
              <span>{post.metadata.readTime}</span>
            </div>
            <span>By {post.metadata.author}</span>
          </div>

          <button
            class="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            onclick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.metadata.title,
                  text: post.metadata.excerpt,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
          >
            <Share2 class="w-4 h-4" />
            Share
          </button>
        </div>
      </header>

      <!-- Article Content -->
      <div
        class="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-gray-300 prose-strong:text-white prose-code:text-gray-300 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-white/20"
        in:fade={{ duration: 800, delay: 400 }}
      >
        {#if post.component}
          <post.component />
        {/if}
      </div>

      <!-- Navigation -->
      <footer class="mt-16 pt-8 border-t border-white/20">
        <div class="flex justify-between items-center">
          <a
            href="/blog"
            class="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 rounded-lg transition-colors font-semibold"
          >
            <ArrowLeft class="w-4 h-4" />
            Back to Blog
          </a>

          <div class="text-center">
            <p class="text-gray-400 mb-2">Enjoyed this article?</p>
            <a
              href="/links"
              class="text-gray-200 hover:text-white transition-colors font-semibold"
            >
              Follow me for more content
            </a>
          </div>
        </div>
      </footer>
    </article>
  </main>
</div>

<style>
</style>
