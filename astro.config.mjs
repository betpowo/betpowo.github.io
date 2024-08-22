import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/betty': '/characters/betty',
		'/josephine': '/characters/josephine',
		'/glib': '/characters/glib',
		'/betpo': '/characters/betpo',
		'/carlos': '/characters/carlos',
	},
	integrations: [alpine(), mdx()],
	site: 'https://betpowo.github.io'
});
