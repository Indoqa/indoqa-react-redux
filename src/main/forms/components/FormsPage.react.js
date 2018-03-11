// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'
import {Link} from 'react-router'
import {createComponent} from 'react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import ButtonLink from '../../commons/components/atoms/ButtonLink.react'

import type {User} from '../types/User'

type Props = {
  users: Array<User>
}

const TableData = createComponent(({theme}) => ({
  padding: theme.spacing.space1,
}), 'td')


const renderUserRow = (user:User) => {
  return (
    <tr key={user.id}>
      <TableData>{user.name}</TableData>
      <TableData>{user.email}</TableData>
      <TableData>
        <ButtonLink>
          <Link to={`/forms/users/${user.id}`}>Edit</Link>
        </ButtonLink>
      </TableData>
    </tr>
  )
}

class FormsPage extends React.Component<Props> {

  render() {
    const {users} = this.props
    return (
      <MainMenuTemplate title="Forms: List of editable users">
        <Box p={3}>
          <table>
            <tbody>
              {users.map(renderUserRow)}
            </tbody>
          </table>
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default FormsPage
