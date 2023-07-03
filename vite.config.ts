import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@/consts': path.join(__dirname, './src/consts'),
      '@/components': path.join(__dirname, './src/components'),
      '@/types': path.resolve(__dirname, './src/types'),
      "@/factories": path.resolve(__dirname, './src/factories'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/styles': path.resolve(__dirname, './src/styles')
    },
  },
});