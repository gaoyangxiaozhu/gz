var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: {
    blog: [
        './src/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'source'),
    filename: 'blog.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/[hash:8].style.css', { allChunks: true })
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules|src\/lib\/[duoshuo|jquery|yue]/ }
    ],
    loaders: [
      { test: /\.vue$/,loader: 'vue', include: path.join(__dirname, 'src')},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css?sourceMap&-minimize', 'autoprefixer-loader', 'sass?sourceMap']), include: path.join(__dirname, 'src')},
      { test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src')},
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', ['css-loader?sourceMap', 'autoprefixer-loader']) },
      { test: /\.(jpe?g|png|gif)$/i, loaders: [
        'url?limit=10000&name=images/[hash:8].[name].[ext]',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
      ]},
      { test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'}
    ]
  },
  // vue-loader configurations
  vue: {
    loaders: {
      js: 'babel!eslint',
      css: ExtractTextPlugin.extract("css"),
      sass: ExtractTextPlugin.extract("css!sass")
    }
  },
  eslint: {
    configFile: './.eslintrc.json'
  },
  resolve: {
    root: path.resolve(__dirname, 'node_modules'),
    extensions: ['','.js','.vue','.scss']
  }
}
