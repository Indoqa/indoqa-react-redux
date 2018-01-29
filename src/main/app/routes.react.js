// @flow
import React from 'react'
import {IndexRoute, Route} from 'react-router'

import App from './App.react.js'
import FormsPage from '../forms/components/FormsPage.react.js'
import TimePage from '../time/components/TimePage.react.js'
import TodosPage from '../todos/components/TodosPage.react.js'
import WordsPage from '../words/components/WordsPage.react.js'

const routes = (
  <Route component={App} path="/">
    <IndexRoute component={TimePage} />
    <route component={FormsPage} path="/forms" />
    <Route component={TodosPage} path="/todos" />
    <route component={WordsPage} path="/words" />
  </Route>
)

export default routes
