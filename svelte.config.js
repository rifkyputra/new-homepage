import { mdsvex } from 'mdsvex';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Get the base path for GitHub Pages deployment
const dev = process.env.NODE_ENV === 'development';
const basePath = dev ? '' : '/new-homepage';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],
	kit: { 
		adapter: staticAdapter({
			fallback: 'index.html'
		}),
	},
	extensions: ['.svelte', '.svx'],
	compilerOptions: {
		runes: true,
		
	}
};

export default config;
