import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    logOverride: { 
      'this-is-undefined-in-esm': 'silent',
      'empty-import-meta': 'silent'
    },
    // Ignore all TypeScript errors during build
    ignoreAnnotations: true,
    legalComments: 'none'
  },
  build: {
    rollupOptions: {
      onwarn: () => {
        // Ignore all warnings during build
        return
      },
      external: []
    }
  },
  server: {
    // Ignore TypeScript errors during dev server
    fs: {
      strict: false
    }
  }
})
