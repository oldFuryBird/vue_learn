const path = require('path') // 这里是命令行运行的 不支持es6 import output
//公用的配置,其他的去覆盖这个配置
// webpack-merge
const config = {
  target: 'web',
  entry:path.join(__dirname,'../client/index.js'),
  output:{
    filename:'bundle.[hash:8].js',
    path:path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test:/\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test:/\.js$/,
        loader: 'babel-loader',
        exclude:/node_modules/
      },

      {
        test:/\.(png|gif|svg|jpe?g)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1024,
              name:'resources/[path][name][hash:8].[ext]'
            }
          }
        ]
      },
    ]
  },
}

module.exports = config
