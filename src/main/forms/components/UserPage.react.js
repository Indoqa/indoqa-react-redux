// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'
import {withRouter, type Router} from 'react-router'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import UserForm from './UserForm.react'

import type {User} from '../types/User'

type Props = {
  router: Router,
  currentUser: User,
  loadUser: Function,
  postUser: Function,
}

class UserPage extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
    this.postUser = this.postUser.bind(this)
  }

  componentWillMount() {
    const {router, loadUser} = this.props
    const {id} = router.params
    loadUser(id)
  }

  postUser: (User) => void

  postUser(user: User, setErrors) {
    const {postUser} = this.props
    postUser(user, setErrors)
  }

  render() {
    const {currentUser} = this.props

    if (currentUser === null) {
      return null
    }

    const operation = currentUser.id === '' ? 'Add' : 'Edit'
    return (
      <MainMenuTemplate title={`Forms: ${operation} user`}>
        <Box m={3}>
          <UserForm user={currentUser} onSubmit={this.postUser} />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default withRouter(UserPage)
