import { defineConfig } from 'vite';
import path from 'path'

export default defineConfig({
  root: '',
  build: {
    outDir: 'dist',
  },

  server: {
    port: 3000,
    open: true, 
    cors: true,
  },

  preview: {
    port: 4000,
    open: true, 
  },

  publicDir: 'public',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@js': path.resolve(__dirname, './src/js'),
      '@modules': path.resolve(__dirname, './src/js/modules'),
    }
  },

  
});