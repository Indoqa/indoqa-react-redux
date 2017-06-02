import {combineReducers} from 'redux'

import time from '../time/store/time.reducer.js'
import todos from '../todos/store/todos.reducer.js'

const reducers = {
  time,
  todos,
}

export default combineReducers(reducers)
