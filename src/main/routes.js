import React from 'react'
import {IndexRoute, Route} from 'react-router'
import App from './app/components/App.react'
import TimePage from './time/components/Page.react'
import TodoPage from './todos/components/Page.react'

const routes = (
  <Route component={App} path="/">
    <IndexRoute component={TimePage} />
    <Route component={TodoPage} path="/todos" />
  </Route>
)

export default routes
