import { defineConfig } from 'dumi'

export default defineConfig({
    themeConfig: {
        name: 'utils',
    },
    outputPath: 'dist',
    base: '/utils',
    publicPath: '/utils/',
    favicons: ['/utils/logo.png'],
    logo: '/utils/logo.png',
})
