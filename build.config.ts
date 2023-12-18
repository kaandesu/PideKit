import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/pidekitLibrary/namespaced/',
      outDir: './dist/namespaced',
      declaration: true,
    },
  ],
  clean: true,
  externals: ['radix-vue'],
  rollup: {
    emitCJS: true,
  },
})
