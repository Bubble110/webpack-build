const HtmlWebpackPlugin=require('html-webpack-plugin');
const isDev=process.env.NODE_ENV==='development';
const config=require('./public/config')[isDev?'dev':'build'];

module.exports={
  devtool:'eval-cheap-module-source-map',//开发环境使用
  mode:isDev?"development":"production",
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        use:{
          loader:'babel-loader',
          options:{
            "presets": ["@babel/preset-env"],
            "plugins": [
              [
                "@babel/plugin-transform-runtime",
                {
                    "corejs": 3
                }
              ]
            ]
          }
        },
        exclude: /node_modules/ //排除 node_modules 目录
      },
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', {
            loader: 'postcss-loader',
            // options: {
            //     plugins: function () {
            //         return [
            //             require('autoprefixer')({
            //                 "overrideBrowserslist": [
            //                     ">0.25%",
            //                     "not dead"
            //                 ]
            //             })
            //         ]
            //     }
            // }
        }, 'less-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins:[
    // 放所有的webpack插件
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename:'index.html',//打包后的文件名
      config:config.template,
      minify:{
        removeAttributeQuotes:false,
        collapseWhitespace:false,
      },
      hash:true
    })
  ],
  resolve: {
    extensions: ['.js', '*', '.css']  //现在就没问题了
  }
}