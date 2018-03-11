// @flow
import {connect} from 'react-redux'
import {selectCurrentUser} from '../store/forms.selectors'

import {loadUser} from '../store/forms.actions'
import UserPage from './UserPage.react'

import type {FormsState} from '../types/FormsState'

const mapStateToProps = (state: FormsState) => ({
  currentUser: selectCurrentUser(state),
})

export default connect(mapStateToProps, {loadUser})(UserPage)
