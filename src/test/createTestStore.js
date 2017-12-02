import rootReducer from '../main/app/rootReducer'
import {combinedEpics} from '../main/app/rootEpic'
import {createIndoqaStore} from 'indoqa-react-app'

const createTestRootEpic = (dependencies) => {
  return (...args) => combinedEpics(...args, dependencies)
}

const createTestStore = (dependencies) => {
  const rootEpic = createTestRootEpic(dependencies)
  return createIndoqaStore({
    rootReducer,
    rootEpic
  }).reduxStore
}

export {createTestStore}
