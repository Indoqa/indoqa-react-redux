import React from 'react'
import {render} from 'react-dom'
import IndoqaApplication from 'indoqa-react-app'
import routes from './routes.react'

const reduxConfig = {
  reducers: require('./reducers').default,
  epics: require('./epics').default,
}

render(
  <IndoqaApplication reduxConfig={reduxConfig} routerConfig={{routes}} />,
  document.getElementById('app')
)
