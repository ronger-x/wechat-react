import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        // Disable React Compiler warnings for useEffect setState
      ]
    }
  })],
})
