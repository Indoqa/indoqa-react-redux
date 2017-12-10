// @flow

import type {Action} from '../types/WordsActions'
import type {WordsState} from '../types/WordsState'

const initialState: WordsState = {
  results: [],
  prefix: '',
  isLoading: false,
  error: '',
}

export default (state: WordsState = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_WORDS':
      return {
        ...state,
        isLoading: true,
      }

    case 'FETCH_WORDS_SUCCESS':
      return {
        ...state,
        error: null,
        isLoading: false,
        results: action.results,
      }

    case 'FETCH_WORDS_ERROR':
      return {
        ...state,
        error: action.error,
        isLoading: false,
        results: [],
      }

    case 'FETCH_WORDS_CANCEL':
      return {
        ...state,
        isLoading: false,
        results: [],
      }

    default:
      return state
  }
}
