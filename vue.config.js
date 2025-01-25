const path = require('path')
const webpack = require("webpack");

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    entry: './src/main.js',
  },
  // outputDir: path.join(__dirname, '/package'),
  
  // configureWebpack: {
  //   entry: './lib/index.js',
  //   output: {
  //     filename: '[name].js',  
  //     library: 'musicPlayer',
  //     libraryTarget: 'umd',
  //     libraryExport: 'default',
  //     // umdNamedDefine: true
  //   },
  //   externals: {
  //     vue: {  //将vue依赖 "外部化"，不打包进组件库
  //       root: 'Vue',
  //       commonjs: 'vue',
  //       commonjs2: 'vue',
  //       amd: 'vue'
  //     }
  //   },
  //   plugins: [
  //   ]
  // },
})
