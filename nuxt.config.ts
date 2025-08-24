// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: false },
    ssr: true, // still required for static generation
    target: "static",
    app: {
        baseURL: "/benline-vehicle-insurance/", // important: match your repo name
    },
    nitro: {
        preset: "github_pages",
    },
    css: ["~/assets/css/main.css"],
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            Roboto: true,
            "Josefin+Sans": true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100],
            },
            "Plus Jakarta Sans": "200..800",
            "Crimson Pro": {
                wght: "200..900",
                ital: "200..700",
            },
        },
    },
});
