// @flow
import {createSelector} from 'reselect'

import type {TodoState} from '../types/TodoState'
import {selectTodoState} from '../../app/selectors.js'

export const selectTodos = createSelector(selectTodoState, (state: TodoState) => state.todos)
export const selectFilter = createSelector(selectTodoState, (state: TodoState) => state.filter)
