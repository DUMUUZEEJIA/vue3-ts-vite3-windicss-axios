import { resolve } from 'path'
import { loadEnv } from 'vite'
import loadPagesModule from './loadPagesModule'
import plugins from './plugins'

export default (config) => {
  const { mode } = config
  const env = loadEnv(mode, process.cwd(), '')
  console.log(mode, process.cwd(), '------------');
  return {
    build: {
      manifest: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          ...loadPagesModule()
        }
      }
    },
    plugins: plugins,
    resolve: {
      alias: [
        // 配置别名
        {
          find: "@",
          replacement: resolve(__dirname, "src"),
        },
    ],
    },
    experimental: {
      renderBuiltUrl(filename: string, { hostType }: { hostType: 'js' | 'css' | 'html' }) {
        console.log(filename + '===============')
        if (hostType === 'js') {
          return { runtime: `window.__toCdnUrl(${JSON.stringify(filename)})` }
        } else {
          return { relative: true }
        }
      }
    },
    css: {
      postcss: {

      }
    }
    
    
  }
}