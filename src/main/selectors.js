// @flow
import type {TimeState} from './time/types/TimeState'
import state from './reducers'
import {createSelector} from 'reselect'

type State = {
  time: TimeState,
  todos: any,
  visibilityFilter: any
}

export const selectTimeState = (state: State) => state.time
export const selectTodoState = (state: State) => state.todos

