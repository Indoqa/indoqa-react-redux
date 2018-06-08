// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import AddTodo from '../components/AddTodo.redux'
import Header from './Header.react'
import TodoList from '../components/TodoList.redux'

class TodosPage extends React.Component<{}> {

  render() {
    return (
      <MainMenuTemplate title="Todos">
        <Box>
          <Header />
          <AddTodo />
          <TodoList />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default TodosPage
