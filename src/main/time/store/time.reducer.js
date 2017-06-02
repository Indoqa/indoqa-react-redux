// @flow
import * as R from 'ramda'

import type {TimeState} from '../types/TimeState'
import type {Action} from '../types/TimeActions'

const initialState = {
  result: null,
  error: null,
  isLoading: false,
}

export default (state: TimeState = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_TIME':
      return R.assoc('isLoading', true, state)

    case 'FETCH_TIME_SUCCESS': {
      state = R.assoc('isLoading', false, state)
      state = R.assoc('result', action.payload, state)
      state = R.assoc('error', null, state)
      return state
    }

    case 'FETCH_TIME_ERROR': {
      state = R.assoc('isLoading', false, state)
      state = R.assoc('result', null, state)
      state = R.assoc('error', action.payload.statusText, state)
      return state
    }

    case 'CLEAR_TIME': {
      state = R.assoc('result', null, state)
      state = R.assoc('error', null, state)
      return state
    }

    default:
      return state
  }
}
