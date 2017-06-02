// @flow

import {connect} from 'react-redux'
import {toggleTodo} from '../store/todos.actions'
import TodoList from './TodoList.react'
import {selectTodos, selectFilter} from '../store/todos.selectors'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(selectTodos(state), selectFilter(state)),
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
