import {combineEpics} from 'redux-observable'

import timeEpics from '../../time/store/time.epics'

export default combineEpics(
  ...timeEpics
)
