// const path = require('path') // 这里是命令行运行的 不支持es6 import output
//
// const isDev = process.env.NODE_ENV === 'development'
// const HTMLPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const config = {
//   target: 'web',
//
//   entry:path.join(__dirname,'src/index.js'),
//   output:{
//     filename:'bundle.[hash:8].js',
//     path:path.join(__dirname, 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test:/\.vue$/,
//         loader: 'vue-loader'
//       },
//       {
//         test:/\.jsx$/,
//         loader: 'babel-loader'
//       },
//       // {
//       //   test:/\.css$/,
//       //   use: [
//       //     'style-loader',
//       //     'css-loader'
//       //   ]
//       // },
//       {
//         test:/\.(png|gif|svg|jpe?g)$/,
//         use:[
//           {
//             loader:'url-loader',
//             options:{
//               limit:1024,
//               name:'[name].[ext]'
//             }
//           }
//         ]
//       },
//
//     ]
//   },
//   plugins:[
//     new webpack.DefinePlugin(  //给webpack编译过程中去判断环境
//       {
//         'process.env':{
//           NODE_ENV:isDev?'"development"':'"production"'
//         }
//       }
//     ),
//     new HTMLPlugin() //基础的html配置
//   ]
// }
// //判断 cross-env 在不同平台上传递环境变量
// if(isDev){
//   config.devtool = '#cheap-module-eval-source-map'     // 配置source map 可以直接找到代码关系
//   config.mode="development"
//   config.module.rules.push(  {
//       test:/\.styl$/,
//       use:[
//         'style-loader',
//         'css-loader',
//         {
//           loader:'postcss-loader',
//           options: {
//             sourceMap:true
//           }
//         },
//           'stylus-loader',
//       ]
//     })
//   config.devServer = {
//     port:8000,
//     host:'0.0.0.0', // 所有的网卡都可以访问
//     overlay: { // 错误信息显示
//       errors:true  // 显示错误的网页
//     },
//     //open:true // 每次自动打开浏览器
//     // historyFallback: { /*把devserver映射地址*/},
//     hot:true, // 改组件代码只修改当前组件的内容
//   }
//   config.plugins.push(
//     new webpack.HotModuleReplacementPlugin(), //hot功能的plugin
//     new webpack.NoEmitOnErrorsPlugin() // 减少非必要信息
//   )
// }else{
//   config.mode="production"
//   config.entry = {
//     app:path.join(__dirname,'src/index.js'),
//     vendor:['vue']
//   }
//   config.output={
//     path:path.resolve(__dirname,'dist'),
//     filename:'[chunkhash].js',
//     chunkFilename: '[chunkhash].js'
//   }
//   config.module.rules.push(  {
//       test:/\.styl$/,
//       use:[
//         MiniCssExtractPlugin.loader,
//         'css-loader',
//         {
//           loader:'postcss-loader',
//           options: {
//             sourceMap:true
//           }
//         },
//           'stylus-loader',
//       ]
//     })
//     const optimize = {
//       runtimeChunk: true,
//           splitChunks: {
//               chunks: "all",
//               cacheGroups: {
//               // vendor:{
//               //   chunks:"all",
//               //   name:'vendor',
//               //   // test:/vue/,
//               //   },
//               // runtime:{
//               //   chunks: 'initial',
//               //   name:'runtime',
//               //   test:'/webpack/'
//               }
//               // }
//           }
//     }
//     config.optimization = optimize
//     config.plugins.push(
//       new MiniCssExtractPlugin({
//         filename:"[contenthash:8].css"
//       }),
//       // new webpack.optimize.CommonsChunkPlugin({
//       //   name:'vendor'
//       // })// webpack4 废弃
//     )
// }
const config = require('./build/webpack.config.client.js')
module.exports = config
