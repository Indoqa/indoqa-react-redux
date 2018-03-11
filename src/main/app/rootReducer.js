// @flow
import {combineReducers} from 'redux'

import forms from '../forms/store/forms.reducer'
import time from '../time/store/time.reducer'
import todos from '../todos/store/todos.reducer'
import words from '../words/store/words.reducer'

const reducers = {
  forms,
  time,
  todos,
  words,
}

export default combineReducers(reducers)
