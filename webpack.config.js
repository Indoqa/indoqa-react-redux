const DEV_PORT = 3000
const HOT_RELOAD_PORT = 3001

var path = require('path')
var webpack = require('webpack')

module.exports = {
  devPort: DEV_PORT,
  hotPort: HOT_RELOAD_PORT,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${HOT_RELOAD_PORT}/__webpack_hmr`,
    './src/main/index.js'
  ],
  output: {
    path: path.join(__dirname, 'target'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/',
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}
