// @flow
import React from 'react'
import {IndexRoute, Route} from 'react-router'

import App from './App.react.js'
import FormsPage from '../forms/components/FormsPage.redux.js'
import TimePage from '../time/components/TimePage.react.js'
import TodosPage from '../todos/components/TodosPage.react.js'
import UserPage from '../forms/components/UserPage.redux.js'
import WordsPage from '../words/components/WordsPage.react.js'

const routes = (
  <Route component={App} path="/">
    <IndexRoute component={TimePage} />
    <Route component={FormsPage} path="/forms" />
    <Route component={UserPage} path="/forms/users/:id" />
    <Route component={UserPage} path="/forms/users/" />
    <Route component={TodosPage} path="/todos" />
    <Route component={WordsPage} path="/words" />
  </Route>
)

export default routes
