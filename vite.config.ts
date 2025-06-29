import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url' // Add this import
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@images': resolve(
        fileURLToPath(new URL('./src', import.meta.url)), // Fix __dirname issue
        'assets/images'
      ),
    },
  }
})