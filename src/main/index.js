import React from 'react'
import {render} from 'react-dom'

import IndoqaApplication from 'indoqa-react-app'
import routes from './routes'

render(
  <IndoqaApplication reducerProvider={() => require('./reducers').default} routes={routes} />,
  document.getElementById('app')
)
