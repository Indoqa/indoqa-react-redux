import React from 'react'
import {render} from 'react-dom'

import IndoqaApplication from 'indoqa-react-app'
import routes from './routes'

const reduxConfig = {
  reducerFilePath: './reducers',
  getReducers: () => require('./reducers').default
}

render(
  <IndoqaApplication reduxConfig={reduxConfig} routerConfig={{routes}} />,
  document.getElementById('app')
)
