import React from 'react'
import AddTodo from '../components/AddTodo.redux'
import Footer from '../components/Footer.react'
import VisibleTodoList from '../components/TodoList.redux'

import './Page.styl'

class TodoPage extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default TodoPage
