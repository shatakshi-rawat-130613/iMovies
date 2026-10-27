
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Proxy API and socket traffic to the Express backend.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5002',
      '/socket.io': { target: 'http://localhost:5002', ws: true },
    },
  },
})
