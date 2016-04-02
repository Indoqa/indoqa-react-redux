import {createStore, compose, applyMiddleware} from 'redux'
import createPromiseMiddleware from 'redux-promise-middleware'
import multiMiddleware from 'redux-multi'
import createLoggerMiddleware from 'redux-logger'
import reducers from './reducers'

const createInjectMiddleware = store => next => action => {
  const injectedDependencies = {
    state: store.getState()
  }

  return next(typeof action === 'function' ? action(injectedDependencies) : action)
}

const createReduxStore = () => {
  const promiseMiddleware = createPromiseMiddleware({promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']})
  const loggerMiddleware = createLoggerMiddleware({collapsed: true})
  const injectMiddleware = createInjectMiddleware()
  const devToolsEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f

  const store = createStore(
    reducers,
    compose(
      applyMiddleware(injectMiddleware, multiMiddleware, promiseMiddleware, loggerMiddleware),
      devToolsEnhancer
    )
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default createReduxStore()
