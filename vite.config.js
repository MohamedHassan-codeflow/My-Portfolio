import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative assets prevent a white screen when deploying under a subfolder
  // such as GitHub Pages: https://username.github.io/repository-name/
  base: './'
})
