// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import AddTodo from '../components/AddTodo.redux'
import Footer from '../components/Footer.react'
import TodoList from '../components/TodoList.redux'

type Props = {}

class TodosPage extends React.Component<Props> {

  render() {
    return (
      <MainMenuTemplate title="Time">
        <Box p={1}>
          <AddTodo />
          <TodoList />
          <Footer />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default TodosPage
