import React from 'react'
import {IndexRoute, Route} from 'react-router'
import App from './components/App'

// add additional pages and according routes here
import TodoPage from './pages/Todo'

const createRoutes = () => (
  <Route component={App} path="/">
    <IndexRoute component={TodoPage} />
  </Route>
)

export default createRoutes()
