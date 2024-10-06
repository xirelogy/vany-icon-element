import { defineConfig } from 'vite';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    svgLoader(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VanyIconElementLibrary',
      fileName: 'vany-icon-element',
    },
    rollupOptions: {
      external: [
        'vue',
        '@element-plus/icons-vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
          '@element-plus/icons-vue': 'ElementPlusIconsVue',
        },
      },
    },
  },
});