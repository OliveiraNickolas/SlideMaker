import { defineConfig } from 'vite'
import jsx from '@vitejs/plugin-vue-jsx'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [jsx()],
  base: '/SlideMaker/',
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx']
  }
})
