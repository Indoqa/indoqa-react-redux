import React from 'react'
import {IndexRoute, Route} from 'react-router'
import App from './app/components/App.react'

// add additional pages and according routes here
import TodoPage from './todos/routes/Todos'
import TimePage from './time/components/Page.react'

const createRoutes = () => (
  <Route component={App} path="/">
    <IndexRoute component={TimePage} />
    <Route component={TodoPage} path="/todos" />
  </Route>
)

export default createRoutes()
