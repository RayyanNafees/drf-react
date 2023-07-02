import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'
// import { dirname, resolve } from 'path'

const root = './leadmanager/frontend/', // root project folder
  base = '/static/frontend/' // output folder

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)
console.log(fileURLToPath(new URL(root+'src', import.meta.url)))
console.log(path.resolve(__dirname, root+'src'))
// https://vitejs.dev/config/
export default defineConfig({
  root,
  base,
  // other configuration options...
  plugins: [react()],

  build: {
    outDir: base,
    assetsDir: '.',
    emptyOutDir: true,
    // manifest: true,
    rollupOptions: {
      input: root + 'src/main.jsx',
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'leadmanager/frontend/src'),
      },
    },
  },
})
