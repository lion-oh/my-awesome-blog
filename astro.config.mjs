// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// Github Pages "프로젝트 사이트"일 경우 (repo가 username.github.io가 아님):
// site는 실제 배포 URL, base는 /<리포지토리명>
const isProjectSite = true; // username.github.io 리포가 아니라면 true

// https://astro.build/config
export default defineConfig({
    site: isProjectSite
        ? 'https://lion-oh.github.io/my-awesome-blog/'
	: 'https://lion-oh.github.io',
    base: isProjectSite ? 'my-awesome-blog' : '/',
    integrations: [mdx(), react()],
});
