import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    ssr: false,
    css: [
        '~/assets/css/main.scss',
        //'~/assets/css/theme.css',
        'primevue/resources/themes/md-dark-indigo/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
    ],
    build: {
        transpile: ['primevue']
    }
})
