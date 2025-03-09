import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://opsvio.github.io/', // Replace with your repository name
  server: {
    port: 5173,
    host: true
  }
});