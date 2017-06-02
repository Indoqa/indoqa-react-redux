import {createStore, compose, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {createLogger} from 'redux-logger'

import rootReducer from './app/reducers/index.js'
import rootEpic from './app/epics/index.js'

const createReduxStore = (reduxConfig) => {
  const isProduction = process.env.NODE_ENV === 'production'

  const epicMiddleware = createEpicMiddleware(rootEpic)
  const middlewares = [epicMiddleware]

  if (isProduction) {
    return createStore(
      rootReducer,
      reduxConfig.initialState,
      applyMiddleware(...middlewares)
    )
  }

  const logger = createLogger({
    collapsed: true,
  })
  middlewares.push(logger)

  const devToolsEnhancer = window.devToolsExtension ? window.devToolsExtension() : (f) => f

  const store = createStore(
    rootReducer,
    reduxConfig.initialState,
    compose(
      applyMiddleware(...middlewares),
      devToolsEnhancer
    )
  )

  if (module.hot) {
    module.hot.accept('./app/reducers', () => {
      const nextRootReducer = require('./app/reducers/index').default
      store.replaceReducer(nextRootReducer)
    })

    if (epicMiddleware) {
      module.hot.accept('./app/epics', () => {
        const nextRootEpic = require('./app/epics/index').default
        epicMiddleware.replaceEpic(nextRootEpic)
      })
    }
  }

  return store
}

export default createReduxStore
