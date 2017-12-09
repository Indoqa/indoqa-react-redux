// @flow
import * as React from 'react'
import {ThemeProvider} from 'react-fela'
import {buildTheme} from 'indoqa-react-fela'

import theme from './theme.js'

type Props = {
  children?: React.Node,
}

class App extends React.Component<Props> {

  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <ThemeProvider theme={buildTheme(theme)}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

export default App
