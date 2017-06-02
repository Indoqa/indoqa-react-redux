import createIndoqaStore from '../createIndoqaStore.js'

const createStore = () => {
  const indoqaStore = createIndoqaStore({
    rootReducer: require('./reducers/').default,
    rootEpic: require('./epics/').default,
  })

  if (module.hot) {
    module.hot.accept('./reducers/', () => {
      const nextRootReducer = require('./reducers/').default
      indoqaStore.reduxStore.replaceReducer(nextRootReducer)
    })

    if (indoqaStore.epicMiddleware) {
      module.hot.accept('./epics/', () => {
        const nextRootEpic = require('./epics/').default
        indoqaStore.epicMiddleware.replaceEpic(nextRootEpic)
      })
    }
  }

  return indoqaStore.reduxStore
}

export default createStore
