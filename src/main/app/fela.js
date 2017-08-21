import presetWeb from 'fela-preset-web'
import namedMediaQuery from 'fela-plugin-named-media-query'
import monolithic from 'fela-monolithic'

const init = (renderer) => {
  renderer.renderStatic('html, body, #app {height: 100%}')
}

const namedMediaQueryPlugin = namedMediaQuery({
  desktop: '@media (min-width: 1024px)',
  tablet: '@media (min-width: 768px)',
})

const config = {
  plugins: [
    ...presetWeb,
    namedMediaQueryPlugin,
  ],
}

if (process.env.NODE_ENV !== 'production') {
  config.enhancers = [monolithic()]
}

export default {
  init,
  config,
}
