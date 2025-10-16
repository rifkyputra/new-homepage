import type { Component } from "svelte";

export interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    featured: boolean;
    slug: string;
  };
  component: Component;
}

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const blogModules = import.meta.glob("/src/content/blog/*.svx", {
    eager: true,
  });

  const posts: BlogPost[] = [];

  for (const [path, module] of Object.entries(blogModules)) {
    const slug = path.split("/").pop()?.replace(".svx", "") || "";
    const postModule = module as {
      default: Component;
      metadata: BlogPost["metadata"];
    };

    if (postModule.metadata) {
      posts.push({
        slug,
        metadata: postModule.metadata,
        component: postModule.default,
      });
    }
  }

  // Sort by date (newest first)
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
