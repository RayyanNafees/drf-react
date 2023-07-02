import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const root = path.resolve(__dirname, 'leadmanager/frontend');
const base = '/static/frontend/';

export default defineConfig({
  root,
  base,
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'leadmanager/frontend/src')// + '/',
    },
  },
  
  plugins: [react()],
  
  build: {
    outDir: path.resolve(__dirname, 'leadmanager/frontend', base),
    assetsDir: '.',
    emptyOutDir: true,
    rollupOptions: {
      input: root + '/src/main.jsx',
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
