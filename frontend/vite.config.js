import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

export default defineConfig({
  // ... other configuration
  server: {
    host: '0.0.0.0', // This was the fix for the previous issue
    port: process.env.PORT || 5173,
    // Add this line to allow access from any host
    allowedHosts: '*'
  }
});
