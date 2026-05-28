import { defineConfig } from 'vite';
export default defineConfig({
  base: '/taller-pro/',
  root: '.',
  build: { outDir: 'dist', emptyOutDir: true },
  server: { port: 5177, open: true },
});
