import type { PageLoad } from "./$types";
import { loadBlogPosts } from "$lib/blog";

export const load: PageLoad = async () => {
  const posts = await loadBlogPosts();

  return {
    posts,
  };
};
