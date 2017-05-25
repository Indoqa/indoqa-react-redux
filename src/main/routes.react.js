import React from 'react'
import {IndexRoute, Route} from 'react-router'

import TimePage from './time/components/TimePage.react.js'
import TodosPage from './todos/components/TodosPage.react'

const routes = (
  <Route path="/">
    <IndexRoute component={TimePage} />
    <Route component={TodosPage} path="/todos" />
  </Route>
)

export default routes
