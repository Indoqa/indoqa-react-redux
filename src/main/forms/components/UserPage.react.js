// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'
import {withRouter} from 'react-router'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import UserForm from './UserForm.react.js'

import type {User} from '../types/User'

type Props = {
  router: any,
  currentUser: User,
  loadUser: Function,
  saveUser: Function,
}

const s = (user: User, saveUser: Function) => {
  console.log('user', user)
  saveUser(user)
}

class UserPage extends React.Component<Props> {

  componentWillMount() {
    const {router, loadUser} = this.props
    const {id} = router.params
    loadUser(id)
  }

  render() {
    const {currentUser, saveUser} = this.props

    if (currentUser === null) {
      return null
    }

    return (
      <MainMenuTemplate title="Forms: Edit user">
        <Box m={3}>
          <UserForm user={currentUser} onSubmit={(user) => s(user, saveUser)} />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default withRouter(UserPage)
