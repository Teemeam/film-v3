import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  base: '/film',
  resolve: {
    alias: {
      '~': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
    },
  },
  server: {
    port: 3000,
  },
  vite: {
    define: {
      'import.meta.env.FLICKR_CONSUMER_KEY': JSON.stringify(process.env.FLICKR_CONSUMER_KEY),
      'import.meta.env.FLICKR_CONSUMER_SECRET': JSON.stringify(process.env.FLICKR_CONSUMER_SECRET),
      'import.meta.env.FLICKR_OAUTH_TOKEN': JSON.stringify(process.env.FLICKR_OAUTH_TOKEN),
      'import.meta.env.FLICKR_OAUTH_TOKEN_SECRET': JSON.stringify(
        process.env.FLICKR_OAUTH_TOKEN_SECRET
      ),
      'import.meta.env.FLICKR_PHOTOSET_ID': JSON.stringify(process.env.FLICKR_PHOTOSET_ID),
      'import.meta.env.FLICKR_USER_ID': JSON.stringify(process.env.FLICKR_USER_ID),
    },
  },
});
