import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  slidev: {
   components: {
    deep: true,
    directoryAsNamespace: true,
   }
  },
  plugins: [
    eslintPlugin(),
    vueJsx()
   ],
})
