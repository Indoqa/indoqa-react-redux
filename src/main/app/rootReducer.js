// @flow
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import forms from '../forms/store/forms.reducer'
import time from '../time/store/time.reducer'
import todos from '../todos/store/todos.reducer'
import words from '../words/store/words.reducer'

const reducers = {
  routing: routerReducer,
  forms,
  time,
  todos,
  words,
}

export default combineReducers(reducers)
