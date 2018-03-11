// @flow
import {connect} from 'react-redux'
import {selectUsers} from '../store/forms.selectors'

import type {FormsState} from '../types/FormsState'
import FormsPage from './FormsPage.react'

const mapStateToProps = (state: FormsState) => ({
  users: selectUsers(state),
})

export default connect(mapStateToProps)(FormsPage)
