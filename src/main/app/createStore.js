import {createIndoqaStore} from 'indoqa-react-app'

const createStore = (history) => {
  const indoqaStore = createIndoqaStore({
    rootReducer: require('./rootReducer.js').default,
    rootEpic: require('./rootEpic.js').default,
    enableLogging: process.env.NODE_ENV !== 'production',
    history,
  })

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer.js').default
      indoqaStore.reduxStore.replaceReducer(nextRootReducer)
    })

    if (indoqaStore.epicMiddleware) {
      module.hot.accept('./rootEpic', () => {
        const nextRootEpic = require('./rootEpic.js').default
        indoqaStore.epicMiddleware.replaceEpic(nextRootEpic)
      })
    }
  }

  return indoqaStore.reduxStore
}

export default createStore
