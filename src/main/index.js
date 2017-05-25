// @flow
import React from 'react'
import {render} from 'react-dom'
import {IndoqaFela} from 'indoqa-react-fela'

import IndoqaApplication from 'indoqa-react-app'
import theme from './theme.js'
import routes from './routes.react'

const reduxConfig = {
  reducers: require('./reducers').default,
  epics: require('./epics').default,
}

const initFela = (renderer) => {
  renderer.renderStatic('html, body, #app {height: 100%}')
}

// hot reload does not work, see
// http://fela.js.org/docs/advanced/DeveloperExperience.html
// https://github.com/este/este/blob/c7e1138e51be6a8c27ba534dc8ecd0c74a695a57/src/browser/app/Root.js#L13
render(
  <IndoqaFela init={initFela} customTheme={theme}>
    <IndoqaApplication reduxConfig={reduxConfig} routerConfig={{routes}} />
  </IndoqaFela>,
  document.getElementById('app')
)
