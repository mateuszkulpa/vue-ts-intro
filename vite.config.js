import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  slidev: {
   components: {
    deep: true,
    directoryAsNamespace: true,
   }
  },
  plugins: [
    eslintPlugin(),
   ],
})
