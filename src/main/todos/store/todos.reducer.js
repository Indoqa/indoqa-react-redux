// @flow
import * as R from 'ramda'

import type {TodoState} from '../types/TodoState'
import type {Action} from '../types/TodoActions'

const initialState: TodoState = {
  todos: [],
  filter: 'SHOW_ALL',
}

const todos = (state: TodoState = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        id: state.todos.length,
        text: action.text,
        completed: false,
      }
      const updatedList = R.append(newTodo, state.todos)
      return R.assoc('todos', updatedList, state)
    }

    case 'TOGGLE_TODO': {
      const id = action.id
      const index = R.findIndex((item) => item.id === id)(state.todos)
      const updatedList = R.adjust((item) => R.assoc('completed', !item.completed, item), index, state.todos)
      return R.assoc('todos', updatedList, state)
    }

    case 'SET_FILTER': {
      return R.assoc('filter', action.filter, state)
    }

    default:
      return state
  }
}

export default todos
