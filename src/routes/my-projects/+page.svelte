<script lang="ts">
  import { Github, ExternalLink, Calendar, Search, Filter, SortAsc, X, RefreshCw } from "@lucide/svelte";
  import { fade } from "svelte/transition";
  import { Nav, Footer, GradientBackground } from "$lib/components";

  const projects = [
    {
      title: "Medical AI Assistant",
      description:
        "Built a medical triage assistant with FastAPI + LangGraph routing, MCP tools for interoperability, and a streaming React chat UI; delivers cholesterol/diabetes risk assessments, first-aid guidance, and WebSocket live responses backed by OpenRouter LLM.",
      technologies: ["FastAPI", "LangGraph", "MCP", "React", "WebSocket", "OpenRouter"],
      status: "personal",
      date: "2025",
    },
    {
      title: "Galeriee",
      description:
        "Full-stack collaborative gallery app with role-based authentication, ffmpeg compression, email invitations, and a serverless architecture.",
      technologies: ["TanStack Start", "ffmpeg", "Cloudflare R2", "Turso"],
      demo: "https://galeri.ee",
      status: "personal",
      date: "2025",
    },
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
      title: "Chill6",
      description:
        "Entertainment web platform with PWA support, Tauri desktop app targets, TanStack Router routing, and modern TypeScript/Tailwind UI.",
      technologies: ["TypeScript", "TanStack Router", "Tailwind CSS", "Tauri", "PWA"],
      github: "https://github.com/rifkyputra/chill6Homepage",
      demo: "https://chill6.space/",
      status: "personal",
      date: "2025",
    },
    {
      title: "Soundboard",
      description:
        "Progressive Web App soundboard with hotkeys, offline support, Recoil state management, and automated tests (Playwright & Vitest).",
      technologies: ["React", "TypeScript", "Vite", "Recoil", "PWA"],
      github: "https://github.com/rifkyputra/soundboard-pwa",
      demo: "#",
      status: "community",
      date: "2023",
    },
    {
      title: "Dockyy",
      description:
        "A modern Docker dashboard with Git integration, Docker Compose management, Cloudflare Tunnel support, and real-time container status.",
      technologies: ["Docker", "React", "TypeScript", "Flask", "SQLAlchemy", "Turso", "Cloudflare Tunnel"],
      github: "https://github.com/rifkyputra/dockyy",
      demo: "#",
      status: "personal",
      date: "2024",
    },
    {
      title: "Honotan",
      description:
        "Monorepo starter combining Hono (API) and TanStack Start (web), built with Bun for fast iterations—useful as a boilerplate for modern fullstack apps.",
      technologies: ["Bun", "Hono", "TanStack Start", "Drizzle ORM", "Redis", "BullMQ", "Postgres"],
      github: "https://github.com/rifkyputra/honotan",
      demo: "#",
      status: "personal",
      date: "2024",
    },
    {
      title: "iSAFE BIB",
      description:
        "Health, safety, and environment app with offline mode support for 500+ daily active users in remote mining areas. Spearheaded major upgrade and rewrite from React Native to Flutter. Major upgrade from Flutter 1 to Flutter 2, huge codebase up to 100k lines of code.",
      technologies: ["Flutter", "Offline Sync", "SQLite"],
      status: "proprietary",
      date: "2020-2023",
    },
    {
      title: "Jakarta Eye Center Apps",
      description:
        "Led Discovery Phases for new feature sets, implementing robust API integrations and asynchronous payment processing. Increased user retention and customer satisfaction.",
      technologies: ["Flutter", "API Integration", "Payment Gateway"],
      status: "proprietary",
      date: "2021-2023",
    },
    {
      title: "SunTerra",
      description:
        "Solar Panel Installation app supporting both Client and Vendor Apps for managing solar panel installations.",
      technologies: ["Flutter"],
      status: "proprietary",
      date: "2020-2023",
    },
    {
      title: "Chat App",
      description: "Chat App using grpc protocol with real-time messaging",
      technologies: ["gRPC", "Flutter", "Bloc"],
      github: "#",
      demo: "#",
      status: "personal",
      date: "2022",
    },
    {
      title: "Hospital App",
      description: "Hospital management app. freelance project from client",
      technologies: ["Flutter", "Bloc"],
      status: "proprietary",
      date: "2022",
    },
    {
      title: "Survey Website",
      description:
        "Survey website for gathering employee feedback. Working as fulltime",
      technologies: ["React", "TypeScript"],
      status: "proprietary",
      date: "2022",
    },
    {
      title: "sshii",
      description:
        "A bash script to manage multiple SSH keys in the same host, simplifying SSH key configuration and switching.",
      technologies: ["Bash", "SSH"],
      github: "https://github.com/rifkyputra/sshii",
      status: "community",
      date: "2020",
    },
  ];

  // Reactive variables for search, filter, sort
  let searchTerm = $state('');
  let selectedStatuses = $state(new Set(['personal', 'community', 'proprietary']));
  let selectedTechs = $state(new Set<string>());
  let sortBy = $state('date-desc');

  // Get unique technologies
  let uniqueTechs = $derived([...new Set(projects.flatMap(p => p.technologies))].sort());

  // Filtered and sorted projects
  let filteredProjects = $derived(projects
    .filter(project => {
      const matchesSearch = searchTerm === '' ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesStatus = selectedStatuses.has(project.status);

      const matchesTech = selectedTechs.size === 0 ||
        project.technologies.some(tech => selectedTechs.has(tech));

      return matchesSearch && matchesStatus && matchesTech;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return parseInt(b.date.split('-')[0]) - parseInt(a.date.split('-')[0]);
        case 'date-asc':
          return parseInt(a.date.split('-')[0]) - parseInt(b.date.split('-')[0]);
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    }));

  // helper functions to manage Sets safely in runes mode
  function toggleStatus(status: string) {
    const next = new Set(selectedStatuses);
    if (next.has(status)) next.delete(status);
    else next.add(status);
    selectedStatuses = next;
  }

  function toggleTech(tech: string) {
    const next = new Set(selectedTechs);
    if (next.has(tech)) next.delete(tech);
    else next.add(tech);
    selectedTechs = next;
  }

  function clearSearch() {
    searchTerm = '';
  }

  function resetFilters() {
    searchTerm = '';
    selectedStatuses = new Set(['personal', 'community', 'proprietary']);
    selectedTechs = new Set();
    sortBy = 'date-desc';
  }
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
        Portfolio
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Here's a collection of projects I've worked on, showcasing my skills in
        web development, design, and problem-solving.
      </p>
    </div>

    <div class="mb-12 space-y-6 flex flex-row " in:fade={{ duration: 800, delay: 400 }}>
    <!-- Search, Filter, Sort Controls -->

      <div class="flex-col justify-start flex-2 mr-6 space-y-4">
        <!-- Search Bar -->
      <div class="flex justify-start w-full">
        <div class="relative w-full">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            bind:value={searchTerm}
            placeholder="Search projects..."
            class="w-full pl-10 pr-10 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
          />

          {#if searchTerm}
            <button
              class="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 text-gray-300"
              on:click={clearSearch}
              aria-label="Clear search"
            >
              <X class="w-3 h-3" />
            </button>
          {/if}
        </div>
      </div>

      <!-- Filters and Sort -->
      <div class="flex flex-wrap justify-start gap-6 items-start flex-col">
       <!-- Status Filter -->
        <div class="flex items-center gap-3">
          <Filter class="w-5 h-5 text-gray-400" />
          <span class="text-gray-300 text-sm font-medium">Status:</span>
          <div class="flex items-center gap-2">
            {#each ['personal', 'community', 'proprietary'] as status}
              <button
                on:click={() => toggleStatus(status)}
                class="px-3 py-1 rounded-full text-sm font-medium transition-colors {selectedStatuses.has(status) ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}"
                aria-pressed={selectedStatuses.has(status)}
              >
                {status}
              </button>
            {/each}
          </div>
        </div>

        <!-- Sort -->
        <div class="flex items-start gap-3">
          <SortAsc class="w-5 h-5 text-gray-400" />
          <span class="text-gray-300 text-sm font-medium">Sort:</span>
          <select
            bind:value={sortBy}
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 px-3 py-2 text-sm"
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="title-asc">Title A-Z</option>
            <option value="title-desc">Title Z-A</option>
          </select>

          <button
            class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-sm text-gray-300"
            on:click={resetFilters}
            aria-label="Reset filters"
          >
            <RefreshCw class="w-4 h-4 text-gray-300" />
            Reset
          </button>
        </div>
      </div>


      
         
      <!-- Results Count -->
      <div class="text-center">
        <p class="text-gray-400 text-sm">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>
      </div>
      <div>
          <!-- Technology Filter -->
        <div class="flex items-center gap-3">
          <div class="flex gap-2 flex-wrap max-w-md">
            {#each uniqueTechs as tech}
              <button
                on:click={() => toggleTech(tech)}
                class="px-2 py-1 rounded-full text-xs transition-colors {selectedTechs.has(tech) ? 'bg-purple-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}"
                aria-pressed={selectedTechs.has(tech)}
              >
                {tech}
              </button>
            {/each}
          </div>
        </div>

      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredProjects as project, index}
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
