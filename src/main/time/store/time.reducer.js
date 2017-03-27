// @flow

import type {TimeState} from '../types/TimeState'
import type {Action} from 'redux'
import {FetchTimeAction, ClearTimeAction} from '../types/TimeActions'

import * as actions from './time.actions'
import * as R from 'ramda'

const initiatState = {
  result: null,
  error: null,
  isLoading: false
}

export default (state: TimeState = initiatState, action: Action) => {
  switch (action.type) {
    case actions.FETCH_TIME:
      return R.assoc('isLoading', true, state)

    case actions.FETCH_TIME_SUCCESS:
      const fetchTimeAction: FetchTimeAction = action
      
      state = R.assoc('isLoading', false, state)
      state = R.assoc('result', action.payload, state)
      state = R.assoc('error', null, state)
      return state

    case actions.FETCH_TIME_ERROR:
      state = R.assoc('isLoading', false, state)
      state = R.assoc('result',null, state)
      state = R.assoc('error', action.payload.statusText, state)
      return state

    case actions.CLEAR_TIME:
      state = R.assoc('result', null, state)
      state = R.assoc('error', null, state)
      return state

    default:
      return state
  }
}
