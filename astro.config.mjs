import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
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
	},
	integrations: [alpine(), mdx()],
	site: 'https://betpowo.github.io'
});
