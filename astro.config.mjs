import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // Integraciones de UI
  integrations: [
    react(),
    tailwind()
  ],

  // Configuración para Base de Datos y SSR (Server Side Rendering)
  output: 'server', // Obligatorio para manejar DB y usuarios dinámicos
  
  adapter: node({
    mode: 'standalone', // Ideal para desplegar en servidores Node estándar (Railway, VPS, local)
  }),
});