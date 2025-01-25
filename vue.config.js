const path = require('path')
const webpack = require("webpack");

const { defineConfig } = require('@vue/cli-service')
const config = () => {
  const node_env = process.env.NODE_ENV;
  const production = node_env === 'production';

  if (production) {
    return {
      transpileDependencies: true,
      lintOnSave: false,
      outputDir: path.join(__dirname, '/package'),
      configureWebpack: {
        entry: './lib/index.js',
        resolve: {
          alias: {
            '@': path.resolve('lib')
          }
        },
        output: {
          filename: '[name].js',  
          library: 'musicPlayer',
          libraryTarget: 'umd',
          libraryExport: 'default',
          globalObject: 'this'
        },
        externals: {
          vue: {  //将vue依赖 "外部化"，不打包进组件库
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
          }, 
          vuex: 'vuex',
          'element-ui': 'ElementUI'
        },
        plugins: [
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
          }),
        ],
        module: {
          rules: [
            {
              test: /.(jpe?g|png|gif|svg)$/,
              // use: [
              //   {
              //     loader: 'url-loader',
              //     options: {
              //       name: 'assets/[name].[hash:6].[ext]',
              //       limit: 80000,
              //       fallback: 'file-loader', 
              //     }
              //   }
              // ]
              type: 'asset',
              parser: {
                //转base64的条件
                dataUrlCondition: {
                maxSize: 100 * 1024, // 12kb
                }
              }, 
            },
          ]
        }
      },
      css: {
        extract: false,
      }
    }
  } else {
    return {
      transpileDependencies: true,
      lintOnSave: false,
      configureWebpack: {
        entry: './src/main.js',
        resolve: {
          alias: {
            '@': path.resolve('src')
          }
        },
      },
    }
  }
}

const _config = config();
module.exports = defineConfig(_config);