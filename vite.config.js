import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    open: '/index.html',
    port: 5174
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        website: resolve(__dirname, 'website.html')
      }
    }
  }
});
