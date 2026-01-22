<script lang="ts">
  import { Github, ExternalLink, Calendar, Search, Filter, SortAsc, X, RefreshCw } from "@lucide/svelte";
  import { fade } from "svelte/transition";
  import { Nav, Footer, GradientBackground } from "$lib/components";
  import { projects } from "$lib/data/projects";

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

<GradientBackground>
  <!-- Navigation -->
  <div class="flex justify-center pt-8">
    <Nav />
  </div>

  <!-- Main Content -->
  <main class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 text-white">
    <div class="text-center mb-16" in:fade={{ duration: 800 }}>
      <h1
        class="text-5xl font-extrabold mb-4 font-['Raleway']"
      >
        Portfolio
      </h1>
      <p class="text-[#9c9c9c] text-base max-w-2xl mx-auto font-['IBM_Plex_Mono']">
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
            class="w-full pl-10 pr-10 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#3f8e00] focus:ring-2 focus:ring-[#3f8e00]/20"
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
          <span class="text-gray-300 text-sm font-medium font-['IBM_Plex_Mono']">Status:</span>
          <div class="flex items-center gap-2">
            {#each ['personal', 'community', 'proprietary'] as status}
              <button
                on:click={() => toggleStatus(status)}
                class="px-3 py-1 rounded-full text-sm font-medium font-['IBM_Plex_Mono'] transition-colors {selectedStatuses.has(status) ? 'bg-[#3f8e00] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}"
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
          <span class="text-gray-300 text-sm font-medium font-['IBM_Plex_Mono']">Sort:</span>
          <select
            bind:value={sortBy}
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#3f8e00] focus:ring-2 focus:ring-[#3f8e00]/20 px-3 py-2 text-sm font-['IBM_Plex_Mono']"
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="title-asc">Title A-Z</option>
            <option value="title-desc">Title Z-A</option>
          </select>

          <button
            class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-sm text-gray-300 font-['IBM_Plex_Mono']"
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
        <p class="text-gray-400 text-sm font-['IBM_Plex_Mono']">
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
                class="px-2 py-1 rounded-full text-xs font-['IBM_Plex_Mono'] transition-colors {selectedTechs.has(tech) ? 'bg-[#3f8e00] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}"
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
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {#each filteredProjects as project, index}
        <div
          class="project-card bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#3f8e00]/50 transition-all duration-300 hover:transform hover:scale-105"
          in:fade={{ duration: 600, delay: index * 200 }}
        >
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-2">
              <Calendar class="w-4 h-4 text-gray-400" />
              <span class="text-sm text-gray-400 font-['IBM_Plex_Mono']">{project.date}</span>
            </div>
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold font-['IBM_Plex_Mono'] {project.status ===
              'Completed'
                ? 'bg-green-500/20 text-green-300'
                : 'bg-yellow-500/20 text-yellow-300'}"
            >
              {project.status}
            </span>
          </div>

          <h3 class="text-xl font-extrabold mb-3 text-white font-['Raleway']">{project.title}</h3>
          <p class="text-gray-300 mb-4 text-sm leading-relaxed font-['IBM_Plex_Mono']">
            {project.description}
          </p>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-6">
            {#each project.technologies as tech}
              <span
                class="px-2 py-1 bg-[#3f8e00]/20 text-[#3f8e00] rounded-full text-xs font-['IBM_Plex_Mono']"
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
                class="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors text-sm font-['IBM_Plex_Mono']"
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
                class="flex items-center gap-2 px-4 py-2 bg-[#3f8e00]/50 hover:bg-[#3f8e00]/70 rounded-lg transition-colors text-sm font-['IBM_Plex_Mono'] text-white shadow-[0px_8px_30px_0px_rgba(63,142,0,0.3)]"
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
      <h2 class="text-2xl font-extrabold mb-4 font-['Raleway']">Interested in collaborating?</h2>
      <p class="text-gray-300 mb-6 font-['IBM_Plex_Mono']">
        I'm always open to discussing new projects and opportunities.
      </p>
      <a
        href="/links"
        class="inline-flex items-center gap-2 px-6 py-3 bg-[#3f8e00] hover:bg-[#2d6600] border border-[#62ba1b] rounded text-white font-bold font-['IBM_Plex_Mono'] shadow-[0px_8px_30px_0px_rgba(63,142,0,0.5)] transition-all duration-300"
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
    border-color: rgba(63, 142, 0, 0.5);
    box-shadow: 0 20px 40px rgba(63, 142, 0, 0.1);
  }
</style>
