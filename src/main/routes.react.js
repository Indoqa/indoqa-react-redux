import React from 'react'
import {IndexRoute, Route} from 'react-router'

import ThemableApp from './ThemableApp.react.js'
import TimePage from './time/components/TimePage.react.js'
import TodosPage from './todos/components/TodosPage.react.js'

const routes = (
  <Route component={ThemableApp} path="/">
    <IndexRoute component={TimePage} />
    <Route component={TodosPage} path="/todos" />
  </Route>
)

export default routes
