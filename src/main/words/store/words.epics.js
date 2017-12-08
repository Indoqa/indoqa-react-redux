import {fetchWordsSuccess} from './words.actions'

const fetchWordsEpic$ = (action$) =>
  action$
    .ofType('FETCH_WORDS')
    .debounceTime(350)
    .map((action) => {
      if (action.prefix === '') return fetchWordsSuccess([])
      return fetchWordsSuccess(['California', 'Canada'])
    })

export default [fetchWordsEpic$]
