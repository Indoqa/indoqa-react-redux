import {fromJS} from 'immutable'
import {FETCH_TIME, FETCH_TIME_SUCCESS, FETCH_TIME_ERROR, CLEAR_TIME} from './time.actions'

const initiatState = fromJS({
  result: null,
  error: null,
  isLoading: false
})

export default (state = initiatState, action) => {
  switch (action.type) {
    case FETCH_TIME:
      return state.set('isLoading', true)

    case FETCH_TIME_SUCCESS:
      state = state.set('isLoading', false)
      state = state.set('result', fromJS(action.payload))
      state = state.set('error', null)
      return state

    case FETCH_TIME_ERROR:
      state = state.set('isLoading', false)
      state = state.set('result', null)
      state = state.set('error', action.payload.statusText)
      return state

    case CLEAR_TIME:
      state = state.set('result', null)
      state = state.set('error', null)
      return state

    default:
      return state
  }
}
