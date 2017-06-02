import React, {PropTypes} from 'react'
import {Provider as Redux} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {IndoqaFela} from 'indoqa-react-fela'

const IndoqaApplication = ({store, routerConfig, fela}) => {
  const history = (routerConfig.history) ? routerConfig.history : browserHistory

  return (
    <Redux store={store}>
      <IndoqaFela init={fela}>
        <Router history={history}>
          {routerConfig.routes}
        </Router>
      </IndoqaFela>
    </Redux>
  )
}

IndoqaApplication.propTypes = {
  store: PropTypes.object.isRequired,
  routerConfig: PropTypes.object.isRequired,
  fela: PropTypes.func,
}

IndoqaApplication.defaultProps = {
  fela: null,
}

export default IndoqaApplication
