import { defineConfig } from 'vite'
import viteConfigClient from './build/vite.config.client'

// https://vitejs.dev/config/
export default defineConfig((config) => {
  const { command } = config

  return command === 'serve' ? viteConfigClient(config) : {}
})
