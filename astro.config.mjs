// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://USERNAME.github.io', // TODO: Replace USERNAME with your GitHub username
	base: '/REPO_NAME', // TODO: Replace REPO_NAME with your repository name
	integrations: [mdx(), sitemap()],
});
