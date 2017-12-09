// @flow
import {connect} from 'react-redux'
import {addTodo} from '../store/todos.actions'
import AddTodo from './AddTodo.react'

export default connect(null, {addTodo})(AddTodo)
