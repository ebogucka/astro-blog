import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://beamish-bienenstitch-db14f9.netlify.app",
  integrations: [preact()]
});