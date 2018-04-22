const path = require('path') // 这里是命令行运行的 不支持es6 import output
const isDev = process.env.NODE_ENV === 'development'
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')// 可以合理合并
//判断 cross-env 在不同平台上传递环境变量
const defaultPlugin = [
  new webpack.DefinePlugin(  //给webpack编译过程中去判断环境
    {
      'process.env':{
        NODE_ENV:isDev?'"development"':'"production"'
      }
    }
  ),
  new HTMLPlugin() //基础的html配置

]
let config;
if(isDev){
  const devServer = {
    port:8000,
    host:'0.0.0.0', // 所有的网卡都可以访问
    overlay: { // 错误信息显示
      errors:true  // 显示错误的网页
    },
    //open:true // 每次自动打开浏览器
    // historyFallback: { /*把devserver映射地址*/},
    hot:true, // 改组件代码只修改当前组件的内容
  }
  config = merge(baseConfig,{
      mode:'development',
      module:{
        rules:[
          {
              test:/\.styl$/,
              use:[
                'style-loader',
                'css-loader',
                {
                  loader:'postcss-loader',
                  options: {
                    sourceMap:true
                  }
                },
                  'stylus-loader',
              ]
            }
        ]
      },
      devtool:'#cheap-module-eval-source-map',
      devServer:devServer,
      plugins:defaultPlugin.concat(
        new webpack.HotModuleReplacementPlugin(), //hot功能的plugin
        new webpack.NoEmitOnErrorsPlugin() // 减少非必要信息

      )
  });
}else{
  config = merge(baseConfig,{
      mode:"production",
      entry:{
        app:path.join(__dirname,'../client/index.js'),
        vendor:['vue']
      },
      output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[chunkhash].js',
        chunkFilename: '[chunkhash].js'
      },
      module:{
        rules:[
          {
             test:/\.styl$/,
             use:[
               MiniCssExtractPlugin.loader,
               'css-loader',
               {
                 loader:'postcss-loader',
                 options: {
                   sourceMap:true
                 }
               },
                 'stylus-loader',
             ]
           }
        ]
      },
      optimization:{
        runtimeChunk: true,
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                // vendor:{
                //   chunks:"all",
                //   name:'vendor',
                //   // test:/vue/,
                //   },

                // }
                }
            }
      },
      plugins:defaultPlugin.concat(
        new MiniCssExtractPlugin({
          filename:"[contenthash:8].css"
        }),
      )

  });
}
module.exports = config
