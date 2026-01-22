<script lang="ts">
  import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    Instagram,
    Globe,
    Download,
  } from "@lucide/svelte";
  import { fade, fly } from "svelte/transition";
  import { Nav, Footer, GradientBackground } from "$lib/components";

  const socialLinks = [
    {
      name: "GitHub",
      description: "Check out my code and open source contributions",
      url: "https://github.com/rifkyputra",
      icon: Github,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "LinkedIn",
      description: "Connect with me professionally",
      url: "https://linkedin.com/in/rifptra",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Email",
      description: "Send me a message directly",
      url: "mailto:rifkyadp@gmail.com",
      icon: Mail,
      color: "from-red-500 to-red-700",
    },
    {
      name: "Twitter",
      description: "Follow my thoughts and updates",
      url: "https://twitter.com/0xrkyy",
      icon: Twitter,
      color: "from-sky-400 to-sky-600",
    },
  ];

  const resources = [
    {
      name: "Resume/CV",
      description: "Download my latest resume",
      icon: Download,
      type: "PDF",
    },
  ];
</script>

<GradientBackground>
  <!-- Navigation -->
  <div class="flex justify-center pt-8">
    <Nav />
  </div>

  <!-- Main Content -->
  <main class="container mx-auto px-6 py-12 text-white">
    <div class="text-center mb-16" in:fade={{ duration: 800 }}>
      <h1
        class="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
      >
        Let's Connect
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Find me across the web and let's start a conversation. I'm always
        excited to meet new people and discuss interesting projects.
      </p>
    </div>

    <!-- Social Links Grid -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-8 text-center">
        Social Media & Professional
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {#each socialLinks as link, index}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="link-card group bg-gradient-to-br {link.color} p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            in:fly={{ y: 50, duration: 600, delay: index * 100 }}
          >
            <div class="flex items-start gap-4">
              <div
                class="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors"
              >
                <link.icon class="w-6 h-6" />
              </div>
              <div class="flex-1">
                <h3
                  class="text-xl font-bold mb-2 group-hover:text-white transition-colors"
                >
                  {link.name}
                </h3>
                <p class="text-white/80 text-sm leading-relaxed">
                  {link.description}
                </p>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </section>

    <!-- Resources Section -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-8 text-center">Resources</h2>
      <div class="flex justify-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-2xl">
          {#each resources as resource, index}
            <a
              href="/Rifky_Putra_Resume.pdf"
              download="Rifky_Putra_Resume.pdf"
              class="resource-card group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 text-left w-full block"
              in:fade={{ duration: 600, delay: index * 200 }}
            >
              <div class="flex items-center gap-4">
                <div
                  class="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors"
                >
                  <resource.icon class="w-6 h-6 text-purple-300" />
                </div>
                <div class="flex-1">
                  <h3
                    class="text-lg font-bold mb-1 group-hover:text-purple-300 transition-colors"
                  >
                    {resource.name}
                  </h3>
                  <p class="text-gray-300 text-sm mb-1">
                    {resource.description}
                  </p>
                  <span class="text-xs text-purple-400 font-semibold">
                    {resource.type}
                  </span>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="text-center">
      <div
        class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        in:fade={{ duration: 800, delay: 600 }}
      >
        <h2 class="text-3xl font-bold mb-4">Ready to collaborate?</h2>
        <p class="text-gray-300 mb-6 max-w-lg mx-auto">
          Whether you have a project in mind, want to discuss opportunities, or
          just want to say hi, I'd love to hear from you.
        </p>
        <a
          href="mailto:rifkyadp@gmail.com"
          class="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors font-semibold text-lg"
        >
          <Mail class="w-5 h-5" />
          Send me an email
        </a>
      </div>
    </section>

    <!-- Footer -->
    <Footer class="mt-20" />
  </main>
</GradientBackground>

<style>
  .link-card {
    position: relative;
    overflow: hidden;
  }

  .link-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s;
  }

  .link-card:hover::before {
    left: 100%;
  }

  .resource-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
  }

  .resource-card:hover {
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);
  }
</style>
