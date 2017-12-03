import {ajax} from 'rxjs/observable/dom/ajax'
import {combineEpics} from 'redux-observable'
import timeEpics from '../time/store/time.epics.js'

const combinedEpics = combineEpics(
  ...timeEpics
)

const browserDependencies = {
  ajax,
}

const rootEpic = (...args) => {
  return combinedEpics(...args, browserDependencies)
}

export {combinedEpics}
export default rootEpic
