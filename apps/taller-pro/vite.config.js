import { defineConfig } from 'vite';
export default defineConfig({
  root: '.',
  build: { outDir: 'dist', emptyOutDir: true },
  server: { port: 5177, open: true },
});
