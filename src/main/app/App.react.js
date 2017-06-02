import React, {PropTypes, Component} from 'react'
import {ThemeProvider} from 'react-fela'
import buildTheme from '../lib/buildTheme.js'

import theme from './theme.js'

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={buildTheme(theme)}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.element,
}

App.defaultProps = {
  children: null,
}

export default App
