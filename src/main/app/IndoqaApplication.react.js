import React, {PropTypes, Component} from 'react'
import {Provider as Redux} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {Provider as Fela} from 'react-fela'

import {createRenderer} from '../fela/createRenderer'
import {createMountNode} from '../fela/createMountNode'

const initFela = (renderer) => {
  renderer.renderStatic('html, body, #app {height: 100%}')
}
const renderer = createRenderer(initFela)

// http://fela.js.org/docs/advanced/DeveloperExperience.html
// https://github.com/este/este/blob/c7e1138e51be6a8c27ba534dc8ecd0c74a695a57/src/browser/app/Root.js#L13
class IndoqaApplication extends Component {

  render() {
    const {store, routerConfig} = this.props
    const history = (routerConfig.history) ? routerConfig.history : browserHistory

    return (
      <Redux store={store}>
        <Fela mountNode={createMountNode()} renderer={renderer}>
          <Router history={history}>
            {routerConfig.routes}
          </Router>
        </Fela>
      </Redux>
    )
  }
}

IndoqaApplication.propTypes = {
  store: PropTypes.object.isRequired,
  routerConfig: PropTypes.object.isRequired,
}

export default IndoqaApplication
