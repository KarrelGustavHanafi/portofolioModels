import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Without an explicit host Vite binds to whatever `localhost` resolves to,
    // which on this machine is ::1 only - so http://127.0.0.1:3000 was refused.
    host: '127.0.0.1',
    port: 3000,
    // Tunnels (ngrok etc.) forward the public hostname in the Host header,
    // which Vite rejects with 403 by default. Dev-server only - never affects
    // the production build.
    allowedHosts: true,
    open: false
  }
});
