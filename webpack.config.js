const path = require('path') // 这里是命令行运行的 不支持es6 import output

const isDev = process.env.NODE_ENV === 'development'
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const config = {
  target: 'web',
  entry:path.join(__dirname,'src/index.js'),
  output:{
    filename:'bundle.js',
    path:path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test:/\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|gif|svg|jpe?g)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1024,
              name:'[name].[ext]'
            }
          }
        ]
      },
      {
        test:/\.styl$/,
        use:[
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin(  //给webpack编译过程中去判断环境
      {
        'process.env':{
          NODE_ENV:isDev?'"development"':'"production"'
        }
      }
    ),
    new HTMLPlugin() //基础的html配置
  ]
}
//判断 cross-env 在不同平台上传递环境变量
if(isDev){
  config.devtool = '#cheap-module-eval-source-map'     // 配置source map 可以直接找到代码关系
  config.devServer = {
    port:8000,
    host:'0.0.0.0', // 所有的网卡都可以访问
    overlay: { // 错误信息显示
      errors:true  // 显示错误的网页
    },
    //open:true // 每次自动打开浏览器
    // historyFallback: { /*把devserver映射地址*/},
    hot:true, // 改组件代码只修改当前组件的内容
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(), //hot功能的plugin
    new webpack.NoEmitOnErrorsPlugin() // 减少非必要信息
  )
}
module.exports = config
