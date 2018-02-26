// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import UserForm from './UserForm.react.js'

type Props = {}

const user = {
  id: '',
  name: 'Maier',
  email: 'w.maier@example.com',
  addresses: [
    {
      street: 'Schottenring 3',
      city: 'Vienna',
      zipCode: '1010',
      country: 'Austria',
    },
    {
      street: 'Heinrichstrasse 7',
      city: 'Graz',
      zipCode: '8010',
      country: 'Austria',
    }
  ],
}

class UserPage extends React.Component<Props> {

  render() {
    return (
      <MainMenuTemplate title="Add a user">
        <Box m={1}>
          <UserForm user={user} />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default UserPage
