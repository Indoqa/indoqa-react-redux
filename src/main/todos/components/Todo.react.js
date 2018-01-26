// @flow
/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React from 'react'
import type {Todo as TodoType} from '../types/Todo'

type Props = {
  todo: TodoType,
  onClick: Function,
};

function Todo({todo, onClick}: Props) {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      {todo.text}
    </li>
  )
}
export default Todo
