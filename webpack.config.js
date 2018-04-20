const path = require('path') // 这里是命令行运行的 不支持es6 import output
module.exports = {
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
  }

}
