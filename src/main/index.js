import React from 'react'
import {render} from 'react-dom'
import IndoqaApplication from 'indoqa-react-app'

import App from './app/App.react.js'
import store from './app/store.js'
import fela from './app/fela.js'

render(
  <IndoqaApplication store={store} fela={fela}>
    <App />
  </IndoqaApplication>,
  document.getElementById('app')
)
