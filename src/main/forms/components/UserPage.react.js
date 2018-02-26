// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import UserForm from './UserForm.react.js'

type Props = {}

class UserPage extends React.Component<Props> {

  render() {
    return (
      <MainMenuTemplate title="Add a user">
        <Box m={1}>
          <UserForm />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default UserPage
