import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  resolve: {
    alias: {
      '@Components': '/src/Components',
      '@Productos': '/public/Productos',
      '@lib': '/src/lib',
    },
  },
  build: {
    outDir: 'dist',  // Asegúrate de que los archivos de salida estén en 'dist'
  },
});
