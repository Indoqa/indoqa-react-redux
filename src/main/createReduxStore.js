import {createStore, compose, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {createLogger} from 'redux-logger'

const createReduxStore = (reduxConfig) => {
  const isProduction = process.env.NODE_ENV === 'production'

  const rootReducer = require('./app/reducers/').default
  const rootEpic = require('./app/epics/').default

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
    module.hot.accept('./app/reducers/', () => {
      const nextRootReducer = require('./app/reducers/').default
      store.replaceReducer(nextRootReducer)
    })

    if (epicMiddleware) {
      module.hot.accept('./app/epics/', () => {
        const nextRootEpic = require('./app/epics/').default
        epicMiddleware.replaceEpic(nextRootEpic)
      })
    }
  }

  return store
}

export default createReduxStore
