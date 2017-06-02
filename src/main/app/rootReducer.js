import {combineReducers} from 'redux'

import time from '../time/store/time.reducer.js'
import todos from '../todos/store/todos.reducer.js'
import visibilityFilter from '../todos/store/visibilityFilter.reducer.js'

const reducers = {
  time,
  todos,
  visibilityFilter,
}

export default combineReducers(reducers)
