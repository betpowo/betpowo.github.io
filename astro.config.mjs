import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [alpine(), mdx()],
	site: 'https://betpowo.github.io'
});
