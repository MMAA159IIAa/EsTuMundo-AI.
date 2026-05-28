import { defineConfig } from 'vite';
export default defineConfig({
  base: '/beautly/',
  root: '.',
  build: { outDir: 'dist', emptyOutDir: true },
  server: { port: 5175, open: true },
});
