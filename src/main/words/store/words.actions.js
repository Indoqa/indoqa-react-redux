// @flow
import type {Action} from '../types/WordsActions'

export const fetchWords = (prefix: string): Action => ({
  type: 'FETCH_WORDS',
  prefix,
})

export const fetchWordsSuccess = (results: Array<string>): Action => ({
  type: 'FETCH_WORDS_SUCCESS',
  results,
})
