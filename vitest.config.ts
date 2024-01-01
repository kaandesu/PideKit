import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: 'src/setupTests.ts',
    includeSource: [
      'src/pidekitLibrary/**/*.spec.ts',
      'src/pidekitLibrary/**/*.test.ts',
    ],
  },
})
