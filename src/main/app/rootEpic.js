import 'rxjs'
import {combineEpics} from 'redux-observable'

import timeEpics from '../time/store/time.epics.js'

export default combineEpics(
  ...timeEpics
)
