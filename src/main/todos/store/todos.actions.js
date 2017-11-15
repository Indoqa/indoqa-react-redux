// @flow

import type {Action} from '../types/TodoActions'

export const addTodo = (text: string): Action => ({
  type: 'ADD_TODO',
  text,
})

export const setFilter = (filter: string): Action => ({
  type: 'SET_FILTER',
  filter,
})

export const toggleTodo = (id:number): Action => ({
  type: 'TOGGLE_TODO',
  id,
})
