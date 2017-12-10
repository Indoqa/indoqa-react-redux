// @flow
type FetchWordsAction = {
  type: 'FETCH_WORDS',
  prefix: string,
}

type FetchWordsSuccess = {
  type: 'FETCH_WORDS_SUCCESS',
  results: Array<string>,
}

type FetchWordsError = {
  type: 'FETCH_WORDS_ERROR',
  error: string,
}

type CancelFetchWordsAction = {
  type: 'FETCH_WORDS_CANCEL'
}

export type Action =
  | FetchWordsAction
  | FetchWordsSuccess
  | FetchWordsError
  | CancelFetchWordsAction
