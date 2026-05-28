import { defineConfig } from 'vite';
export default defineConfig({
  base: '/automind/',
  root: '.', build: { outDir: 'dist', emptyOutDir: true }, server: { port: 5174, open: true },
});
