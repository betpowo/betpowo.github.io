import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import mdx from "@astrojs/mdx";

const chars = [];
const exclude = ['betpo'];
//for (var bleh in import.meta.glob("/public/characters/*/button.json")) {
for (var bleh in import.meta.glob([
    "/public/characters/*/data.json",
])) {
    var index = bleh.split('/').at(-2);
    if (!exclude.includes(index)) {
        chars.push(
            index
        );
    }
}

var _redirs = {
    '/home': '/'
};

for (let i = 0; i < chars.length; i++) {
    var char = chars[i];
    //Object.defineProperty(_redirs, '/' + char, { value: '/characters/' + char });
    _redirs['/' + char] = '/characters/' + char;
}

//console.log(_redirs);

// https://astro.build/config
export default defineConfig({
    // output: 'server',
    redirects: _redirs,
    markdown: {
        smartypants: false
    },
    integrations: [alpine(), mdx({
        extendMarkdownConfig: true
    })],
    site: 'https://betpowo.github.io',
    server: {
        open: true
    },
    devToolbar: {
        enabled: false
    },
    vite: {
        optimizeDeps: {
            noDiscovery: true,
            include: ['vite-plugin-md']
        }
    }
});