// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro:{
        errorHandler: "./utils/nitroErrors.ts",
    }
})
