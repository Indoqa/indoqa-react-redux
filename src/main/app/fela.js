// @flow
import presetWeb from 'fela-preset-web'
import namedMediaQuery from 'fela-plugin-named-media-query'
import monolithic from 'fela-monolithic'

import {BREAKPOINT_DESKTOP, BREAKPOINT_TABLET} from './breakpoints.js'

const init = (renderer: any) => {
  renderer.renderStatic('html, body, #app {height: 100%}')
}

const namedMediaQueryPlugin = namedMediaQuery({
  desktop: `@media (min-width: ${BREAKPOINT_DESKTOP}px)`,
  tablet: `@media (min-width: ${BREAKPOINT_TABLET}px)`,
})

const config = {
  plugins: [
    ...presetWeb,
    namedMediaQueryPlugin,
  ],
  enhancers: [],
}

if (process.env.NODE_ENV !== 'production') {
  config.enhancers = [monolithic()]
}

export default {
  init,
  config,
  BREAKPOINT_DESKTOP,
  BREAKPOINT_TABLET,
}
