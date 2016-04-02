var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var path = require('path');

var app = new (require('express'))()

var config = require('./../../webpack.config')
var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
   headers: {'Access-Control-Allow-Origin': '*'},
   noInfo: true, 
   publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname + './../main/index.html'))
})

app.listen(config.hotPort, () => {
  console.log('==> Hot server started at port %d', config.hotPort); // eslint-disable-line no-console
});

app.listen(config.devPort, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", config.devPort, config.devPort)
  }
})
