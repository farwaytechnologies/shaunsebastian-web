import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  server: {
    // This allows binding to the necessary network interface (0.0.0.0)
    host: '0.0.0.0',

    // This resolves the "Blocked request" error by allowing all hosts
    allowedHosts: '*'},


  plugins: [react()],

})
