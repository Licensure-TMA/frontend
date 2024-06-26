import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: '/',
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      pages: '/src/pages',
      consts: '/src/consts',
      utils: '/src/utils',
      wrappers: '/wrappers',
    }
  }
});