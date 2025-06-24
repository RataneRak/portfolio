import { defineConfig } from 'vite'
import React from '@vitejs/plugin-React'

// https://vite.dev/config/
export default defineConfig({
  plugins: [React()],
})
