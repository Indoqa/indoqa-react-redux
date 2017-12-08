import {combineReducers} from 'redux'

import time from '../time/store/time.reducer.js'
import todos from '../todos/store/todos.reducer.js'
import words from '../words/store/words.reducer'

const reducers = {
  time,
  todos,
  words,
}

export default combineReducers(reducers)
