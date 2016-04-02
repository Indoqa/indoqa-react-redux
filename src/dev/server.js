const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')

const app = new (require('express'))()

const config = require('./../../webpack.config')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  headers: {'Access-Control-Allow-Origin': '*'},
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}./../main/index.html`))
})

app.listen(config.hotPort, () => {
  console.log('==> Hot server started at port %d', config.hotPort) // eslint-disable-line no-console
})

app.listen(config.devPort, (error) => {
  if (error) {
    console.error(error)  // eslint-disable-line no-console
  } else {
    console.info( // eslint-disable-line no-console
      '==> Listening on port %s. Open up http://localhost:%s/ in your browser.',
      config.devPort,
      config.devPort
    )
  }
})
