import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vogentclone/', // Updated to match actual repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
