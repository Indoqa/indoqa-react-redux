import expect from 'expect'

import todos from '../../../main/todos/store/todos.reducer'

const initialState = {
  todos: [],
  filter: 'SHOW_ALL',
}

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual(initialState)
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos(initialState, {
        type: 'ADD_TODO',
        text: 'Run the tests',
      })
    ).toEqual({
      todos: [
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
        },
      ],
      filter: 'SHOW_ALL',
    })
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos({
        todos: [
          {
            text: 'Run the tests',
            completed: false,
            id: 0,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 1,
          },
        ]},
        {
          type: 'TOGGLE_TODO',
          id: 1,
        }
      )
    ).toEqual({
      todos: [
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
        },
        {
          text: 'Use Redux',
          completed: true,
          id: 1,
        },
      ],
    })
  })
})
