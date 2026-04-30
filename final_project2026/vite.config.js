import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const root = path.resolve(__dirname, "src")

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': root,
      '@components': path.resolve(__dirname, "src", "components"),
      '@constants': path.resolve(__dirname, "src", "constants"),
      '@pages': path.resolve(__dirname, "src", "pages"),
      '@router': path.resolve(__dirname, "src", "router"),
      '@store': path.resolve(__dirname, "src", "store"),
      '@layouts': path.resolve(__dirname, 'src', 'layouts'),
      '@hooks': path.resolve(__dirname, "src", "hooks"),
    }
  }
})
