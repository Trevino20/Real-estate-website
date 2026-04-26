import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers — smaller, faster output
    target: 'es2020',
    chunkSizeWarningLimit: 600,

    // Enable CSS code splitting for better caching
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        // ✅ FIXED: manualChunks must be a function
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'motion'
            }
            return 'vendor'
          }
        },

        // Content-hash filenames = long-term CDN caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})