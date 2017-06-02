// @flow

import {connect} from 'react-redux'
import {setFilter} from '../store/todos.actions'
import FilterLink from './FilterLink.react'
import {selectFilter} from '../store/todos.selectors'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === selectFilter(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)
