// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   server: {
//     port: 3000,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3001',
//         changeOrigin: true,
//       },
//     },
//   },
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,

    https: {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    },

    // Allow external domains to access the Vite dev server
    allowedHosts: [
      'nextbi.dynprocloud.com',
      '35.174.81.186'
    ],

    // Proxy setup with two different backend targets
    proxy: {
      // Backend #1 (IP-based)
      '/api': {
        target: 'http://35.174.81.186:3001',
        changeOrigin: true,
        secure: false,
      },

      // Backend #2 (domain-based)
      '/auth': {
        target: 'https://nextbi.dynprocloud.com:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
