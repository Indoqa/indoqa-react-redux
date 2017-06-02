// @flow

import React from 'react'
import Todo from './Todo.react'
import type {Todo as TodoType} from '../types/Todo'

type Props = {
  todos: TodoType[],
  onTodoClick: Function,
};

const TodoList = ({todos, onTodoClick}: Props) => (
  <ul>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        todo={todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
