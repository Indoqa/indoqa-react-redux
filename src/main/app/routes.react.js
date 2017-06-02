import React from 'react'
import {IndexRoute, Route} from 'react-router'

import App from './App.react.js'
import TimePage from '../time/components/TimePage.react.js'
import TodosPage from '../todos/components/TodosPage.react.js'

const routes = (
  <Route component={App} path="/">
    <IndexRoute component={TimePage} />
    <Route component={TodosPage} path="/todos" />
  </Route>
)

export default routes
