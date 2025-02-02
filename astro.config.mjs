import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	output: 'server',
	redirects: {
		'/betty': '/characters/betty',
		'/daniel': '/characters/daniel',

		'/josephine': '/characters/josephine',
		'/glib': '/characters/glib',
		'/carlos': '/characters/carlos',

		'/marco': '/characters/marco',
		'/fish': '/characters/fish',
		'/nori': '/characters/nori',
		'/charles': '/characters/charles',

		'/jasmine': '/characters/jasmine',
		'/kinne': '/characters/kinne',
		'/haven': '/characters/haven',
		'/epiphany': '/characters/epiphany',
	},
	markdown: {
		smartypants: false
	},
	integrations: [alpine(), mdx({
		extendMarkdownConfig: true
	})],
	site: 'https://betpowo.github.io'
});
