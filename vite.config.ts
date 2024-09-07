import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    emitCss: false,
  })],
  build: {
    rollupOptions: {
      input: {
        informationBar: '/src/scripts/informationBar.ts',
        fixedBanner: '/src/scripts/fixedBanner.ts',
        blogLink: '/src/scripts/blogLink.ts',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
