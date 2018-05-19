// @flow
import * as React from 'react'
import {ThemeProvider} from 'react-fela'
import {buildTheme} from 'indoqa-react-fela'
import {Switch, Route} from 'react-router-dom'
import {I18nextProvider} from 'react-i18next'

import TimePage from '../time/components/TimePage.react.js'
import TodosPage from '../todos/components/TodosPage.react.js'
import WordsPage from '../words/components/WordsPage.react'

import i18n from './i18n'

import theme from './theme.js'

class App extends React.Component<{}> {

  render() {
    return (
      <ThemeProvider theme={buildTheme(theme)}>
        <I18nextProvider i18n={i18n}>
          <Switch>
            <Route exact path="/" component={TimePage} />
            <Route exact path="/todos" component={TodosPage} />
            <Route exact path="/words" component={WordsPage} />
          </Switch>
        </I18nextProvider>
      </ThemeProvider>
    )
  }
}

export default App
