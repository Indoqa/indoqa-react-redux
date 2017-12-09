// @flow
import {ajax} from 'rxjs/observable/dom/ajax'
import {combineEpics} from 'redux-observable'
import timeEpics from '../time/store/time.epics.js'
import wordsEpics from '../words/store/words.epics'

const combinedEpics = combineEpics(
  ...timeEpics,
  ...wordsEpics
)

const browserDependencies = {
  ajax,
}

const rootEpic = (...args: any) => {
  return combinedEpics(...args, browserDependencies)
}

export {combinedEpics}
export default rootEpic
