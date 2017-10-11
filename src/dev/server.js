const url = require('url')
const options = require('./../../indoqa-webpack-options.js')
const runDevServer = require('indoqa-webpack').runDevServer

const routesCallback = ({app, proxy}) => {
  app.use('/geonames', proxy('http://api.geonames.org', {
    proxyReqPathResolver: (req) => {
      // modify url path if needed
      return url.parse(req.url).path
    },
  }))
}

runDevServer({options, routesCallback})
