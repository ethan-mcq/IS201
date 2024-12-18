import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/register': 'https://startup.gene-chat.com/',
      '/login': 'https://startup.gene-chat.com/',
      '/account': 'https://startup.gene-chat.com/',
      '/chat': 'https://startup.gene-chat.com/',
    },
  },
});
