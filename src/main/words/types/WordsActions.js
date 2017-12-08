// @flow

type FetchWordsAction = {
  type: 'FETCH_WORDS',
  prefix: string,
}

type FetchWordsSuccess = {
  type: 'FETCH_WORDS_SUCCESS',
  results: Array<string>,
}

export type Action =
  | FetchWordsAction
  | FetchWordsSuccess
