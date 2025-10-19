<script lang="ts">
  import { Calendar, Clock, Tag, ArrowRight, Search } from "@lucide/svelte";
  import { fade, fly } from "svelte/transition";
  import { formatDate, loadBlogPosts, type BlogPost } from "$lib/blog";
  import { Nav, Footer } from "$lib/components";

  let data = $state<{ posts: BlogPost[] }>({ posts: [] });

  loadBlogPosts().then((posts) => {
    data = { posts: posts || [] };
  });

  let searchQuery = $state("");
  let selectedTag = $state("");

  // Derive filtered posts based on search and tag filters
  let filteredPosts = $derived(
    data?.posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.metadata.excerpt
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        post.metadata.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag =
        selectedTag === "" || post.metadata.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    })
  );

  const allTags = $derived([
    ...new Set(data?.posts.flatMap((post) => post.metadata.tags)),
  ]);
  const featuredPost = $derived(
    filteredPosts?.find((post) => post.metadata.featured)
  );
  const regularPosts = $derived(
    filteredPosts?.filter((post) => !post.metadata.featured)
  );
</script>

<div
  class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
>
  <!-- Navigation -->
  <div class="flex justify-center pt-8">
    <Nav />
  </div>

  <!-- Main Content -->
  <main class="container mx-auto px-6 py-12">
    <!-- Hero Section -->
    <div class="text-center mb-16" in:fade={{ duration: 800 }}>
      <h1
        class="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
      >
        Blog & Insights
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Thoughts on web development, design, technology, and everything in
        between. Join me on my journey of continuous learning and sharing
        knowledge.
      </p>
    </div>

    <!-- Search and Filter -->
    <div
      class="mb-12 flex flex-col justify-center items-start gap-6"
      in:fade={{ duration: 600, delay: 200 }}
    >
      <div class="relative flex-1">
        <Search class="absolute top-3.5 left-3  w-5 h-5 text-gray-400 z-10" />
        <input
          type="text"
          placeholder="Search articles..."
          bind:value={searchQuery}
          class=" pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
        />
      </div>
      <div class="flex flex-col md:flex-row gap-4 max-w-4xl">
        <!-- Search Input -->

        <!-- Tag Filter -->
        <div class="flex gap-2 flex-wrap">
          <button
            onclick={() => (selectedTag = "")}
            class="px-4 py-2 rounded-lg border transition-colors {selectedTag ===
            ''
              ? 'bg-purple-600 border-purple-600'
              : 'bg-white/10 border-white/20 hover:border-purple-400'}"
          >
            All
          </button>
          {#each allTags as tag}
            <button
              onclick={() => (selectedTag = tag)}
              class="px-4 py-2 rounded-lg border transition-colors {selectedTag ===
              tag
                ? 'bg-purple-600 border-purple-600'
                : 'bg-white/10 border-white/20 hover:border-purple-400'}"
            >
              {tag}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <!-- Featured Post -->
    {#if featuredPost}
      <section class="mb-16" in:fade={{ duration: 800, delay: 400 }}>
        <h2 class="text-2xl font-bold mb-6">Featured Article</h2>
        <article
          class="featured-post bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
        >
          <div class="flex flex-col lg:flex-row gap-8">
            <div class="flex-1">
              <div class="flex items-center gap-4 mb-4 text-sm text-gray-300">
                <div class="flex items-center gap-2">
                  <Calendar class="w-4 h-4" />
                  <span>{formatDate(featuredPost.metadata.date)}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Clock class="w-4 h-4" />
                  <span>{featuredPost.metadata.readTime}</span>
                </div>
              </div>

              <h3 class="text-3xl font-bold mb-4 leading-tight">
                {featuredPost.metadata.title}
              </h3>

              <p class="text-gray-300 mb-6 text-lg leading-relaxed">
                {featuredPost.metadata.excerpt}
              </p>

              <div class="flex flex-wrap items-center justify-between gap-3">
                <div class="flex flex-wrap gap-2">
                  {#each featuredPost.metadata.tags as tag}
                    <span
                      class="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  {/each}
                </div>

                <a
                  href="/blog/{featuredPost.slug}"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors font-semibold"
                >
                  Read More
                  <ArrowRight class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    {/if}

    <!-- Regular Posts Grid -->
    <section>
      <h2 class="text-2xl font-bold mb-8">Latest Articles</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each regularPosts as post, index}
          <article
            class="blog-card bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            in:fly={{ y: 50, duration: 600, delay: index * 100 + 600 }}
          >
            <div class="flex items-center gap-4 mb-4 text-sm text-gray-400">
              <div class="flex items-center gap-2">
                <Calendar class="w-4 h-4" />
                <span>{formatDate(post.metadata.date)}</span>
              </div>
              <div class="flex items-center gap-2">
                <Clock class="w-4 h-4" />
                <span>{post.metadata.readTime}</span>
              </div>
            </div>

            <h3
              class="text-xl font-bold mb-3 leading-tight hover:text-purple-300 transition-colors"
            >
              <a href="/blog/{post.slug}">
                {post.metadata.title}
              </a>
            </h3>

            <p class="text-gray-300 mb-4 text-sm leading-relaxed">
              {post.metadata.excerpt}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              {#each post.metadata.tags as tag}
                <span
                  class="px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs"
                >
                  {tag}
                </span>
              {/each}
            </div>

            <a
              href="/blog/{post.slug}"
              class="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors font-semibold text-sm"
            >
              Read More
              <ArrowRight class="w-4 h-4" />
            </a>
          </article>
        {/each}
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="mt-16 text-center">
      <div
        class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        in:fade={{ duration: 800, delay: 1000 }}
      >
        <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
        <p class="text-gray-300 mb-6 max-w-lg mx-auto">
          Get notified when I publish new articles. No spam, just quality
          content about web development and technology.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
          />
          <button
            class="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors font-semibold"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer class="mt-20" />
  </main>
</div>

<style>
  .featured-post {
    background: linear-gradient(
      135deg,
      rgba(147, 51, 234, 0.2),
      rgba(59, 130, 246, 0.2)
    );
    border: 1px solid rgba(147, 51, 234, 0.3);
  }

  .blog-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
  }

  .blog-card:hover {
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);
  }
</style>
