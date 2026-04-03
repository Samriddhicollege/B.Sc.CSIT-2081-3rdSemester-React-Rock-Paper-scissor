import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  esbuild: {
    jsx: 'automatic', // ✅ Correct location
    // loader: 'jsx', // Only if you must process .js files as JSX
  }
})
