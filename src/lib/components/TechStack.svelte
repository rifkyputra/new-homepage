<script lang="ts">
  import react from "$lib/assets/react.svg";
  import svelte from "$lib/assets/svelte.svg";
  import tailwind from "$lib/assets/tailwind.svg";
  import bun from "$lib/assets/bun.svg";
  import action from "$lib/assets/action.svg";
  import aws from "$lib/assets/aws.svg";
  import docker from "$lib/assets/docker.svg";
  import firebase from "$lib/assets/firebase.svg";
  import flutter from "$lib/assets/flutter.svg";
  import jira from "$lib/assets/jira.svg";
  import node from "$lib/assets/node.svg";
  import redis from "$lib/assets/redis.svg";
  import worker from "$lib/assets/worker.svg";
  import vscode from "$lib/assets/vscode.svg";
  import pg from "$lib/assets/pg.svg";
  import sqlite from "$lib/assets/sqlite.svg";
  import tauri from "$lib/assets/tauri.svg";
  import postman from "$lib/assets/postman.svg";
  import vite from "$lib/assets/vite.svg";
  import storybook from "$lib/assets/storybook.svg";
  import slack from "$lib/assets/slack.svg";
  import tanstack from "$lib/assets/tanstack.png";
  import nest from "$lib/assets/nest.svg";
  import go from "$lib/assets/go.svg";
  import hono from "$lib/assets/hono.svg";
  import railway from "$lib/assets/railway.svg";
  import gitlab from "$lib/assets/gitlab.svg";

  interface Technology {
    name: string;
    iconUrl?: string;
  }

  interface TechCategory {
    name: string;
    icon: string;
    technologies: Technology[];
    size?: string;
  }

  // Using a Map to organize technologies by category
  const techStackMap = new Map<string, TechCategory>([
    [
      "web-frontend",
      {
        name: "Web Frontend",
        icon: "🎨",
        size: "52px",
        technologies: [
          { name: "Svelte", iconUrl: svelte },
          { name: "React", iconUrl: react },
        ],
      },
    ],
    [
      "backend",
      {
        name: "Backend",
        icon: "⚙️",
        technologies: [
          { name: "Node.js", iconUrl: node },
          { name: "Bun", iconUrl: bun },
          { name: "Hono", iconUrl: hono },
          { name: "NestJS", iconUrl: nest },
        ],
      },
    ],
    [
      "web fullstack",
      {
        name: "Web Fullstack",
        icon: "⚙️",
        size: "38px",

        technologies: [
          { name: "Go Fiber", iconUrl: go },
          { name: "TanStack", iconUrl: tanstack },
          { name: "SvelteKit", iconUrl: svelte },
        ],
      },
    ],
    [
      "mobile",
      {
        name: "Mobile",
        icon: "📱",
        size: "52px",
        technologies: [
          { name: "React Native", iconUrl: react },
          { name: "Flutter", iconUrl: flutter },
        ],
      },
    ],
    [
      "cloud",
      {
        name: "Cloud",
        icon: "☁️",
        technologies: [
          { name: "Cloudflare", iconUrl: worker },
          { name: "AWS", iconUrl: aws },
          { name: "Firebase", iconUrl: firebase },
          { name: "Railway", iconUrl: railway },
        ],
      },
    ],

    [
      "database",
      {
        name: "Database",
        icon: "🗄️",
        size: "33px",

        technologies: [
          { name: "PostgreSQL", iconUrl: pg },
          { name: "Redis", iconUrl: redis },
          { name: "SQLite", iconUrl: sqlite },
        ],
      },
    ],
    [
      "ci",
      {
        name: "CI/CD",
        icon: "🔄",
        size: "38px",
        technologies: [
          { name: "GitHub Actions", iconUrl: action },
          { name: "GitLab Runner", iconUrl: gitlab },
        ],
      },
    ],
    [
      "other",
      {
        name: "Other Tools",
        icon: "🛠️",
        size: "20px",
        technologies: [
          { name: "Tailwind CSS", iconUrl: tailwind },
          { name: "Docker", iconUrl: docker },
          { name: "Jira", iconUrl: jira },
          { name: "VS Code", iconUrl: vscode },
          { name: "Tauri", iconUrl: tauri },
          { name: "Postman", iconUrl: postman },
          { name: "Vite", iconUrl: vite },
          { name: "Storybook", iconUrl: storybook },
          { name: "Slack", iconUrl: slack },
        ],
      },
    ],
  ]);
</script>

<div class="flex flex-col gap-4 sm:gap-6">
  {#each techStackMap as [categoryKey, category]}
    <div
      class="tech-category border border-white/10 rounded-xl p-3 sm:p-4 lg:p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5"
    >
      <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <span class="text-lg sm:text-xl lg:text-2xl">{category.icon}</span>
        <h4
          class="text-base sm:text-lg lg:text-xl font-semibold text-white m-0"
        >
          {category.name}
        </h4>
      </div>
      <div class="technologies-grid">
        {#each category.technologies as tech}
          <div
            class="flex items-center justify-center tech-item py-2 sm:py-3 lg:py-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            <div
              class="flex flex-col items-center justify-center gap-1 sm:gap-2"
            >
              {#if tech.iconUrl}
                <img
                  src={tech.iconUrl}
                  alt={tech.name}
                  class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                  style="width: {category.size ??
                    '24px'}; height: {category.size ?? '24px'};"
                />
              {/if}
              <span
                class="tech-name text-xs sm:text-sm text-gray-200 font-medium text-center"
                >{tech.name}</span
              >
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .technologies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 0.5rem;
  }

  @media (min-width: 640px) {
    .technologies-grid {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 0.75rem;
    }
  }

  @media (min-width: 768px) {
    .technologies-grid {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 0.75rem;
    }
  }

  /* Keep minimal responsive grid adjustments */
</style>
