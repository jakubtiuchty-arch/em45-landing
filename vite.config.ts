import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '', // bardzo ważne dla WordPressa
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})