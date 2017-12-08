// @flow

import type {Action} from '../types/WordsActions'
import type {WordsState} from '../types/WordsState'

const initialState: WordsState = {
  results: [],
  prefix: '',
  isLoading: false,
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
        error: null,
        isLoading: false,
        results: action.results,
      }

    default:
      return state
  }
}
