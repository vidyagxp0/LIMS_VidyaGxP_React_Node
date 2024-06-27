import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 100000000 // Set your desired threshold in bytes
  }
});

