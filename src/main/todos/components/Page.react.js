import React from 'react'
import AddTodo from '../components/AddTodo.redux'
import Footer from '../components/Footer.react'
import VisibleTodoList from '../components/TodoList.redux'

import './Page.styl'

const TodoPage = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoPage
