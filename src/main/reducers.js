import timeReducers from './time/reducers'
import todoReducers from './todos/reducers'

export default {
  ...timeReducers,
  ...todoReducers
}
