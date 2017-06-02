import React, {PropTypes} from 'react'
import {Provider as Redux} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {Provider as Fela} from 'react-fela'

import {createRenderer} from '../fela/createRenderer'
import {createMountNode} from '../fela/createMountNode'

const initFela = (renderer) => {
  renderer.renderStatic('html, body, #app {height: 100%}')
}
const renderer = createRenderer(initFela)

const IndoqaApplication = ({store, routerConfig}) => {
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

IndoqaApplication.propTypes = {
  store: PropTypes.object.isRequired,
  routerConfig: PropTypes.object.isRequired,
}

export default IndoqaApplication
