import type { PageLoad } from "./$types";
import { loadBlogPosts } from "$lib/blog";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  const posts = await loadBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    throw error(404, "Blog post not found");
  }

  return {
    post,
  };
};

export async function entries() {
  const posts = await loadBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
