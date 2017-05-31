import React, {PropTypes, Component} from 'react'
import {Provider as Redux} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {Provider as Fela, ThemeProvider} from 'react-fela'
import merge from 'deepmerge'

import {createRenderer} from '../fela/createRenderer'
import {createMountNode} from '../fela/createMountNode'
import {theme as baseTheme} from '../fela/theme'

const initFela = (renderer) => {
  renderer.renderStatic('html, body, #app {height: 100%}')
}

const buildTheme = (customTheme) => {
  return merge(baseTheme, customTheme)
}

class IndoqaApplication extends Component {

  render() {
    const {store, theme, routerConfig} = this.props
    const history = (routerConfig.history) ? routerConfig.history : browserHistory
    const nextTheme = buildTheme(theme)
    console.log('nextTheme', nextTheme)

    return (
      <Redux store={store}>
        <Fela renderer={createRenderer(initFela)} mountNode={createMountNode()}>
          <ThemeProvider theme={nextTheme}>
            <Router history={history}>
              {routerConfig.routes}
            </Router>
          </ThemeProvider>
        </Fela>
      </Redux>
    )
  }
}

IndoqaApplication.propTypes = {
  store: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  routerConfig: PropTypes.object.isRequired,
}

export default IndoqaApplication
