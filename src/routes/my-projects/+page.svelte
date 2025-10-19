<script lang="ts">
  import { Github, ExternalLink, Calendar } from "@lucide/svelte";
  import { fade } from "svelte/transition";
  import { Nav, Footer, GradientBackground } from "$lib/components";

  const projects = [
    {
      title: "Rifky Landing Page",
      description:
        "A personal portfolio website built with SvelteKit, featuring multilingual greetings and modern UI design.",
      technologies: ["SvelteKit", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/rifkyputra/rifky-landing",
      demo: "#",
      status: "personal",
      date: "2025",
    },
    {
      title: "Soundboard",
      description:
        "An offline-first soundboard application with customizable sound packs and user-friendly interface.",
      technologies: ["Text to speech", "React", "Recoil", "pure css", "PWA"],
      github: "#",
      demo: "#",
      status: "community",
      date: "2023",
    },
    {
      title: "Chat App",
      description: "Chat App using grpc protocol with real-time messaging",
      technologies: ["gRPC", "flutter", "bloc"],
      github: "#",
      demo: "#",
      status: "personal",
      date: "2022",
    },
    {
      title: "Hospital App",
      description: "Hospital management app. freelance project from client",
      technologies: ["flutter", "bloc"],
      status: "proprietary",
      date: "2022",
    },
    {
      title: "Survey Website",
      description:
        "Survey website for gathering employee feedback. Working as fulltime",
      technologies: ["react", "typescript"],
      status: "proprietary",
      date: "2022",
    },
    {
      title: "Chill6",
      description:
        "Entertainment website offering movies, games, and cool stuff",
      technologies: ["TanStack Router", "Hono", "Better Auth"],
      github: "https://github.com/rifkyputra/chill6Homepage",
      demo: "https://chill6.space/",
      status: "personal",
      date: "2025",
    },
  ];
</script>

<GradientBackground class="variant-purple">
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
        My Projects
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Here's a collection of projects I've worked on, showcasing my skills in
        web development, design, and problem-solving.
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project, index}
        <div
          class="project-card bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
          in:fade={{ duration: 600, delay: index * 200 }}
        >
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-2">
              <Calendar class="w-4 h-4 text-gray-400" />
              <span class="text-sm text-gray-400">{project.date}</span>
            </div>
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold {project.status ===
              'Completed'
                ? 'bg-green-500/20 text-green-300'
                : 'bg-yellow-500/20 text-yellow-300'}"
            >
              {project.status}
            </span>
          </div>

          <h3 class="text-xl font-bold mb-3 text-white">{project.title}</h3>
          <p class="text-gray-300 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-6">
            {#each project.technologies as tech}
              <span
                class="px-2 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs"
              >
                {tech}
              </span>
            {/each}
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3">
            {#if project.github}
              <a
                href={project.github}
                class="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github class="w-4 h-4" />
                Code
              </a>
            {/if}
            {#if project.demo}
              <a
                href={project.demo}
                class="flex items-center gap-2 px-4 py-2 bg-purple-600/50 hover:bg-purple-500/50 rounded-lg transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink class="w-4 h-4" />
                Demo
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16" in:fade={{ duration: 800, delay: 800 }}>
      <h2 class="text-2xl font-bold mb-4">Interested in collaborating?</h2>
      <p class="text-gray-300 mb-6">
        I'm always open to discussing new projects and opportunities.
      </p>
      <a
        href="/links"
        class="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors font-semibold"
      >
        <ExternalLink class="w-4 h-4" />
        Get in Touch
      </a>
    </div>

    <!-- Footer -->
    <Footer class="mt-20" />
  </main>
</GradientBackground>

<style>
  .project-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .project-card:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(147, 51, 234, 0.5);
    box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);
  }
</style>
