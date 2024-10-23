import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // Ajout de cette ligne pour que les chemins relatifs fonctionnent correctement
  plugins: [react()],
})
