import React, {PropTypes, Component} from 'react'
import {ThemeProvider} from 'react-fela'
import merge from 'deepmerge'

import {theme as baseTheme} from '../fela/theme'
import theme from '../app/theme.js'

const buildTheme = (customTheme) => {
  return merge(baseTheme, customTheme)
}

class ThemableApp extends Component {

  render() {
    return (
      <ThemeProvider theme={buildTheme(theme)}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

ThemableApp.propTypes = {
  children: PropTypes.element,
}

ThemableApp.defaultProps = {
  children: null,
}

export default ThemableApp
