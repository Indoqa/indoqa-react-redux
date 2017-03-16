import Rx from 'rxjs/Rx'
import React from 'react'
import {render} from 'react-dom'
import IndoqaApplication from 'indoqa-react-app'
import routes from './routes'

const reduxConfig = {
  epicFilePath: './epics',
  lazyLoad: (path) => require(path).default
}

render(
  <IndoqaApplication reduxConfig={reduxConfig} routerConfig={{routes}} />,
  document.getElementById('app')
)
