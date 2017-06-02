// @flow

import {connect} from 'react-redux'
import {addTodo} from '../store/todos.actions'
import AddTodo from './AddTodo.react'

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (text) => {
    dispatch(addTodo(text))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
