import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	// output: 'server',
	redirects: {
		'/home': '/',
		'/[slug]': '/characters/[slug]',
		'/characters/characters/[...slug]': '/'
	},
	markdown: {
		smartypants: false
	},
	integrations: [alpine(), mdx({
		extendMarkdownConfig: true
	})],
	site: 'https://betpowo.github.io',
	server: {
		open: true
	}
});
