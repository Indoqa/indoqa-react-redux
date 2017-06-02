import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'react-fela'
import {buildTheme} from 'indoqa-react-fela'

import theme from './theme.js'

class App extends React.Component {

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
