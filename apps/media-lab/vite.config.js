import { defineConfig } from 'vite';
export default defineConfig({
  base: '/media-lab/',
  root: '.',
  build: { outDir: 'dist', emptyOutDir: true },
  server: { port: 5178, open: true },
});
