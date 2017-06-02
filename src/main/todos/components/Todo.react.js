// @flow

import React from 'react'
import type {Todo as TodoType} from '../types/Todo'

type Props = {
  todo: TodoType,
  onClick: Function,
};

const Todo = ({todo, onClick}: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: todo.completed ? 'line-through' : 'none',
    }}
  >
    {todo.text}
  </li>
)

export default Todo
