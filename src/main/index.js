import React from 'react'
import {render} from 'react-dom'
import {createReduxStore} from 'indoqa-react-app'

import IndoqaApplication from './app/IndoqaApplication.react.js'
import routes from './routes.react'
import theme from './theme.js'

const reduxConfig = {
  reducers: require('./reducers').default,
  epics: require('./epics').default,
}

const appElement = document.getElementById('app')

const store = createReduxStore(reduxConfig)

// hot reload does not work, see
// http://fela.js.org/docs/advanced/DeveloperExperience.html
// https://github.com/este/este/blob/c7e1138e51be6a8c27ba534dc8ecd0c74a695a57/src/browser/app/Root.js#L13
render(
  <IndoqaApplication store={store} theme={theme} routerConfig={{routes}} />,
  appElement
)

if (module.hot && typeof module.hot.accept === 'function') {
  module.hot.accept('./app/IndoqaApplication.react.js', () => {
    console.log('reload! 1')
    const NextIndoqaApplication = require('./app/IndoqaApplication.react.js').default

    render(
      <NextIndoqaApplication store={store} theme={theme} routerConfig={{routes}} />,
      appElement
    )
  })
/*
  module.hot.accept('./theme.js', () => {
    console.log('reload! 2')
    const NextIndoqaApplication = require('./app/IndoqaApplication.react.js').default
    const nextTheme = require('./theme.js').default
    console.log('nextTheme', nextTheme)

    render(
      <NextIndoqaApplication store={store} theme={nextTheme} routerConfig={{routes}} />,
      appElement
    )
  })
*/
}
