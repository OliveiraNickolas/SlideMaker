import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SlideMaker/',
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx']
  }
})
