import expect from 'expect'

import * as actions from '../../../main/todos/store/todos.actions'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      text: 'Use Redux',
    })
  })

  it('setFilter should create SET__FILTER action', () => {
    expect(actions.setFilter('active')).toEqual({
      type: 'SET_FILTER',
      filter: 'active',
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1,
    })
  })
})
