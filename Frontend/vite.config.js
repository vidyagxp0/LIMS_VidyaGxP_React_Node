// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
//   optimizeDeps: {
//     exclude: ['chunk-U54DTWZB'], // Yahaan aapko problematic dependency ka naam add karna hoga
//   },
// });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({

build: {
  chunkSizeWarningLimit: 100000000 // Set your desired threshold in bytes
}
});