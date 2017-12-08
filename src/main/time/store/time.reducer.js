// @flow
import type {TimeState} from '../types/TimeState'
import type {Action} from '../types/TimeActions'

const initialState = {
  results: null,
  error: null,
  isLoading: false,
}

export default (state: TimeState = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_TIME':
      return {
        ...state,
        isLoading: true,
      }

    case 'FETCH_TIME_SUCCESS': {
      return {
        isLoading: false,
        results: action.payload,
        error: null,
      }
    }

    case 'FETCH_TIME_ERROR': {
      return {
        isLoading: false,
        results: null,
        error: action.payload,
      }
    }

    case 'FETCH_TIMES_SUCCESS': {
      return {
        isLoading: false,
        results: action.payload,
        error: null,
      }
    }

    case 'CLEAR_TIME': {
      return {
        isLoading: false,
        results: null,
        error: null,
      }
    }

    default:
      return state
  }
}
