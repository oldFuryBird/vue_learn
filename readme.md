## vue 再次学习
### 熟悉前端开发,工程化搭建等
  webpack 打包js
  如果webpack使用超出es5的语法规则就需要使用各种loader去处理
  模块依赖
  打造可以复用的模块,加快开发速度

- css-loader
- test:/.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
  图片  /\.(jpg|png|gif|jpeg|svg)$/
        use:[{loader: 'url-loader',
              options: {
                limit:1024, // 把图片转化为base64代码,小图片比较合适,可以减少http请求  <1024就转出base64
                name:'[name].[ext]'  // name 原名 ext 扩展名

              }

        }]
  styl
  use [style-loader,css-loader,stylus-loader]  // 每个loader 只处理自己相关的

  webpack loader的使用,针对css预处理器,css,图片,以及vue等的处理

  css预处理器

  vue 是一个组件化框架,由各个组件拼凑而成一个页面

  vue 的组件便利性

  vue render方法,vue的核心实现都是虚拟dom,一个组件有数据变化时render

  .vue 最后会转化成render(){ createElement().... 创建节点,最终render} *深入理解render方法*

  vue 实现原理

  vue API 重点
    - 生命周期方法
    - computed  reactive框架, computed计算得到新的值

  postcss-loader  后处理css

  babel-loader/babel-core

  autoprefixer  autoprefixer 自动给浏览器加前缀支持的属性

  .babelrc
    - plugins
      - transform-vue-jsx 转化vue的js代码
  mode config.mode 可以选 production 或 development

  app.vue template 只能有一个节点

  style  lang指定css编译器  scoped 该组件的样式只在当前组件内生效

  jsx 本身使用js语法,讲html写在js里面 可以更加强大 vue 结构更清晰

  @keyup --> v-on:keyup

  @keyup.enter = action  enter之后才执行action

  autofocus 自动选中

  不要在下层组件中操作上层组件的数据,数据在哪里声明至少应该在那里操作

### 学习如何写组件
#### 数据绑定
- 将数据直接绑定到html上面去

### tab组件开发 设计

## webpack4 升级
