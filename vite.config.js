import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  let __dirname = ''
  const isDevelop = env.VITE_USER_NODE_ENV === 'development'
  if (isDevelop) {
    const __filename = fileURLToPath(import.meta.url)
    __dirname = path.dirname(__filename)
  }

  console.log(env)
  return defineConfig({
    plugins: [vue(), vueDevTools(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: isDevelop
      ? {
          host: true,
          https: {
            key: fs.readFileSync(path.resolve(__dirname, 'certs/localhost-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'certs/localhost.pem')),
          },
          port: 5173, // Default Vite port
          strictPort: true, // Prevents Vite from trying to use another port if the specified one is taken
        }
      : null,
  })
}
