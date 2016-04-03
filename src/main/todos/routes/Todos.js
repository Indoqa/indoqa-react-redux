import React from 'react'
import AddTodo from '../containers/AddTodo'
import Footer from '../components/Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

import './Todos.styl'

const TodoPage = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoPage
