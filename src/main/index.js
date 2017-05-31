import React from 'react'
import {render} from 'react-dom'
import {createReduxStore} from 'indoqa-react-app'

import IndoqaApplication from './app/IndoqaApplication.react.js'
import routes from './routes.react'

const reduxConfig = {
  reducers: require('./reducers').default,
  epics: require('./epics').default,
}

const appElement = document.getElementById('app')

const store = createReduxStore(reduxConfig)

render(
  <IndoqaApplication store={store} routerConfig={{routes}} />,
  appElement
)

if (module.hot && typeof module.hot.accept === 'function') {
  module.hot.accept('./app/IndoqaApplication.react.js', () => {
    const NextIndoqaApplication = require('./app/IndoqaApplication.react.js').default

    render(
      <NextIndoqaApplication store={store} routerConfig={{routes}} />,
      appElement
    )
  })
}

// todo
// - ThemedApp as root component (--> routes)
// - move createReduxStore into this codebase and find and make sure that the root epic and
//   root reducer are both triggered by the hot reload process
// - cleanup codebase and move the changes back to indoqa-react-fela and indoqa-react-app
// - evaluate if merging indoqa-react-fela and indoqa-react-app makes sense
