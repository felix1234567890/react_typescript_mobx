import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
        open: true,
        host: true,
        port: 3000,
      },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});