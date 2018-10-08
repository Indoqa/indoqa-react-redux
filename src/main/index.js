import React from 'react'
import {render} from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import {IndoqaApplication} from 'indoqa-react-app'
import {createRenderer} from 'indoqa-react-fela'

import App from './app/App.react.js'
import createStore from './app/createStore.js'
import fela from './app/fela.js'

const history = createHistory()
const store = createStore(history)
const renderer = createRenderer(fela)

render(
  <IndoqaApplication store={store} renderer={renderer} history={history}>
    <App />
  </IndoqaApplication>,
  document.getElementById('app')
)
