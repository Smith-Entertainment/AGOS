<<<<<<< HEAD
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cors from 'cors';
=======
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

>>>>>>> cae0fb151469fbd9637e9fb240fad8bc9e05424e
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
<<<<<<< HEAD
  },
  server: {
    proxy: {
      '/api/obra': {
        target: 'http://localhost:9000/obra',
        changeOrigin: true
      }
    },
    middleware: [cors()],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    }
  }
});
=======
  }
}
)
>>>>>>> cae0fb151469fbd9637e9fb240fad8bc9e05424e
