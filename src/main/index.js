import React from 'react'
import {render} from 'react-dom'

import IndoqaApplication from './lib/IndoqaApplication.react.js'

import store from './app/store.js'
import routes from './app/routes.react.js'
import fela from './app/fela.js'

render(
  <IndoqaApplication store={store} routerConfig={{routes}} fela={fela} />,
  document.getElementById('app')
)
