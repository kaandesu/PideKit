import { defineConfig, PluginOption } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
// @ts-ignore
import RadixVueResolver from 'radix-vue/resolver'
import { visualizer } from 'rollup-plugin-visualizer'
import Inspect from 'vite-plugin-inspect'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'live-demo') {
    return {
      base: './',
      plugins: [
        vue(),
        Components({
          dts: true,
          resolvers: [
            RadixVueResolver(),
            // RadixVueResolver({
            //   prefix: '' // use the prefix option to add Prefix to the imported components
            // })
          ],
        }),
      ],
      resolve: {
        alias: {
          '~': resolve(__dirname, 'src', 'pidekitLibrary'),
        },
      },
      build: {
        rollupOptions: {
          input: ['index.html'],
        },
      },
    }
  } else {
    return {
      plugins: [
        vue(),
        Components({
          dts: true,
          globs: ['src/pidekitLibrary/components/**/*.vue'],
          resolvers: [
            RadixVueResolver(),
            // RadixVueResolver({
            //   prefix: '' // use the prefix option to add Prefix to the imported components
            // })
          ],
        }),
        Inspect({
          build: true,
          outputDir: '.vite-inspect',
        }),
        visualizer({
          gzipSize: true,
          brotliSize: true,
          open: false,
          template: 'treemap',
          filename: '.rollup-inspect/index.html',
        }), // keep this as last one
        ,
      ],
      resolve: {
        alias: {
          '~': resolve(__dirname, 'src', 'pidekitLibrary'),
        },
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'src/pidekitLibrary/index.ts'),
          name: 'Vue3ComponentLibraryTemplate',
          fileName: 'pidekit',
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
    }
  }
})
