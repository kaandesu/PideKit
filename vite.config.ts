import { defineConfig, PluginOption } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
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
      test: {
        globals: true,
      },
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
          template: 'sunburst',
          filename: '.rollup-inspect/index.html',
        }), // keep this as last one
        ,
      ],
      test: {
        globals: true,
        setupFiles: 'src/setupTests.ts',
        includeSource: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
      },
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
