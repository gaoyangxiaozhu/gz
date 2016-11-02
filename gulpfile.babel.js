import path from 'path'
import gulp from 'gulp'
import gutil from 'gulp-util'
import inject from 'gulp-inject'
import WebpackDevServer from "webpack-dev-server"
import webpack from "webpack"
import del from 'del'
import env from 'gulp-env'
import open from 'open'

const DEV_PORT = 3000


gulp.task('serve', cb =>{
  let webpackConfig = require('./webpack.config.js')
  let myConfig = Object.create(webpackConfig)
  myConfig.entry.blog.unshift('webpack/hot/only-dev-server')
  myConfig.entry.blog.unshift('webpack-dev-server/client?http://localhost:' + DEV_PORT)
  new WebpackDevServer(webpack(myConfig), {
      noInfo: false,
      hot: true,
      inline: true,
      historyApiFallback: true,
      publicPath: myConfig.output.publicPath,
      stats: {
        colors: true
      }
  }).listen(DEV_PORT, "localhost", err => {
      if(err) throw new gutil.PluginError("webpack-dev-server", err)
      gutil.log("[webpack-dev-server]", "==> 🌎  http://localhost:" + DEV_PORT)
      open('http://localhost:' + DEV_PORT)
      cb()
  })
})
gulp.task('clean', cb => del([path.join(__dirname, 'source'), path.join(__dirname, 'layout')], cb))
gulp.task('build', ['clean', 'webpack'], () =>{
    gulp.src('./src/index.pug')
    .pipe(inject(gulp.src(['./source/blog.js', './source/**/*.css'], {read: false})), {
        transform: function(filepath) {
            return filepath.replace(/\/source\//i, '')
        }
    })
    .pipe(gulp.dest('layout/'))
})
gulp.task('default', ['build'])
gulp.task('webpack', cb => {
  let webpackConfig = require('./webpack.config.js')
  let myConfig = Object.create(webpackConfig)
  webpack(myConfig, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err)
      gutil.log("[webpack]", stats.toString({
          colors: true
      }))
      cb()
  })
})
