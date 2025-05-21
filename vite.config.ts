import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Como o repositório é Feli-App-Hub.github.io, o site roda na raiz:
  base: '/', 

  // Se você não estiver tendo problemas com o lucide-react, pode remover este exclude.
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
