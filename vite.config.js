import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import glob from 'fast-glob';

// 读取组件中的整体index.js和每个组件的index.js
// 动态的读components文件夹 把入口文件index.js和组件的index.js都读出来
const list = {}

async function getEntryList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  // console.log(1)
  for (let file of files) {
    const component = file.split(/[/.]/)[2]
    list[component] = `./${file}`
  }
}

getEntryList('components/lib', list)

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: list, // 入口文件路径
      name: '[name]', // 全局变量名
      fileName: (format) => `[name].${format}.js`, // 输出文件名格式
    },
    rollupOptions: {
      external: ['vue'], // 外部依赖，需要排除在打包之外
      output: {
        globals: {
          vue: 'Vue', // 全局变量名: 模块名
        },
      },
    },
  },
})
