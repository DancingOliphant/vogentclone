import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/vogentclone/', // Use root path for dev, repo name for production
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
