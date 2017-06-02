import React from 'react'
import {render} from 'react-dom'

import IndoqaApplication from './lib/IndoqaApplication.react.js'

import createStore from './app/createStore.js'
import routes from './app/routes.react.js'

render(
  <IndoqaApplication store={createStore()} routerConfig={{routes}} />,
  document.getElementById('app'))
