import React from 'react'
import {render} from 'react-dom'

import IndoqaApplication from './app/IndoqaApplication.react.js'

import createStore from './app/createStore.js'
import routes from './routes.react'

render(
  <IndoqaApplication store={createStore()} routerConfig={{routes}} />,
  document.getElementById('app'))
