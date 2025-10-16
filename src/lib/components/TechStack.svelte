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

<div class="tech-stack-container">
  {#each techStackMap as [categoryKey, category]}
    <div class="tech-category">
      <div class="category-header">
        <span class="category-icon">{category.icon}</span>
        <h4 class="category-title">{category.name}</h4>
      </div>
      <div class="technologies-grid">
        {#each category.technologies as tech}
          <div
            class="flex items-center justify-center tech-item py-4 rounded-lg transition-all duration-300"
          >
            <!-- <span class="tech-icon">{tech.icon}</span> -->
            <div class="flex flex-col items-center justify-center gap-2">
              {#if tech.iconUrl}
                <img
                  src={tech.iconUrl}
                  alt={tech.name}
                  style="width: {category.size ??
                    '30px'}; height: {category.size ?? '30px'};"
                />
              {/if}
              <span class="tech-name">{tech.name}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .tech-stack-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .tech-category {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.25rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .tech-category:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .category-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .category-icon {
    font-size: 1.5rem;
  }

  .category-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }

  .technologies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.75rem;
  }

  .tech-item:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  .tech-icon {
    font-size: 1.2rem;
  }

  .tech-name {
    font-size: 0.8rem;
    color: #e0e0e0;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .tech-stack-container {
      gap: 1rem;
    }

    .tech-category {
      padding: 1rem;
    }

    .technologies-grid {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 0.5rem;
    }

    .tech-item {
      padding: 0.4rem 0.6rem;
    }

    .category-title {
      font-size: 1rem;
    }

    .tech-name {
      font-size: 0.8rem;
    }
  }
</style>
