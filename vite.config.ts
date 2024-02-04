import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-space-project',
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     components: '/src/components',
  //     hooks: '/src/hooks',
  //     Pages: '/src/Pages',
  //     style: '/src/style',
  //     types: '/src/types',
  //     utils: '/src/utils',
  //   },
  // },
});
