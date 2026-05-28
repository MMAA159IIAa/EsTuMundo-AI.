import { defineConfig } from 'vite';
export default defineConfig({
  base: '/estutanda/',
  root: '.',
  build: { outDir: 'dist', emptyOutDir: true },
  server: { port: 5176, open: true },
});
