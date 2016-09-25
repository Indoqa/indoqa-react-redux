import React from 'react'
import {render} from 'react-dom'

import IndoqaApplication from 'indoqa-react-app'
import routes from './routes'

const reducerConfig = {
  filePath: './reducers',
  getReducers: () => require('./reducers').default
}

render(
  <IndoqaApplication reducerConfig={reducerConfig} routes={routes} />,
  document.getElementById('app')
)
