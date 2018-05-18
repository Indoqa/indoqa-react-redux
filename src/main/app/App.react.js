// @flow
import * as React from 'react'
import {ThemeProvider} from 'react-fela'
import {buildTheme} from 'indoqa-react-fela'
import {Switch, Route} from 'react-router-dom'

import TimePage from '../time/components/TimePage.react.js'
import TodosPage from '../todos/components/TodosPage.react.js'
import WordsPage from '../words/components/WordsPage.react'

import theme from './theme.js'

class App extends React.Component<{}> {

  render() {
    return (
      <ThemeProvider theme={buildTheme(theme)}>
        <Switch>
          <Route exact path="/" component={TimePage} />
          <Route exact path="/todos" component={TodosPage} />
          <Route exact path="/words" component={WordsPage} />
        </Switch>
      </ThemeProvider>
    )
  }
}

export default App
