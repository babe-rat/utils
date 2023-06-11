import { defineConfig } from 'vitepress'
import { applyPlugins } from '@mickeyrat/md-demo-plugins'
import { genTemp } from '@mickeyrat/vite-plugin-gen-temp'
import { sidebar } from './sidebar.js'

export default defineConfig({
    lang: 'zh-CN',
    lastUpdated: true,
    base: process.env.NODE_ENV === 'production' ? '/utils' : '/',
    title: 'utils',
    locales: {
        '/': {
            lang: 'zh-CN',
            description: '',
        },
    },
    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: process.env.NODE_ENV === 'production' ? '/utils/logo.png' : '/logo.png',
            },
        ],
    ],
    themeConfig: {
        siteTitle: '@baberat/utils',
        logo: '/logo.png',
        sidebar,
        search: {
            provider: 'local',
        },
    },
    vue: {},
    vite: {
        plugins: [genTemp()],
    },

    markdown: {
        config: (md) => {
            applyPlugins(md)
        },
        theme: {
            light: 'github-light',
            dark: 'github-dark',
        },
    },
})
