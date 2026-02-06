import { defineConfig } from 'astro/config';
import node from '@astrojs/node'; // Necesitarás instalar este adaptador

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  // ... integraciones de react y tailwind
});