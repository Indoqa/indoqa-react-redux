import {createStore, compose, applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {createLogger} from 'redux-logger'

const createIndoqaStore = ({rootReducer, rootEpic, initialState = {}}) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const epicMiddleware = createEpicMiddleware(rootEpic)
  const middlewares = [epicMiddleware]

  if (isProduction) {
    return {
      reduxStore: createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
      ),
      epicMiddleware,
    }
  }

  const logger = createLogger({
    collapsed: true,
  })
  middlewares.push(logger)

  const devToolsEnhancer = window.devToolsExtension ? window.devToolsExtension() : (f) => f

  return {
    reduxStore: createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(...middlewares),
          devToolsEnhancer
        )
      ),
    epicMiddleware,
  }
}

export default createIndoqaStore
