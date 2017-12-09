/* eslint-disable prefer-template */
import {Observable} from 'rxjs'
import {fetchWordsSuccess} from './words.actions'

const url = (prefix) => {
  return '/words/v4/words.json/search/' + prefix +
    '?caseSensitive=false' +
    '&minCorpusCount=5' +
    '&maxCorpusCount=-1' +
    '&minDictionaryCount=1' +
    '&maxDictionaryCount=-1' +
    '&minLength=1' +
    '&maxLength=-1' +
    '&skip=0' +
    '&limit=5' +
    '&api_key=966a26e2e28f6ce972d600ff0fa0293908a2661d3f407c2db'
}

const fetchWordsEpic$ = (action$, store, {ajax}) =>
  action$
    .ofType('FETCH_WORDS')
    .debounceTime(150)
    .switchMap((action) => {
      if (action.prefix === '') {
        return Observable.of(fetchWordsSuccess([]))
      }
      return ajax
        .getJSON(url(action.prefix))
        .map((json) => fetchWordsSuccess(json.searchResults.map((entry) => entry.word)))
    })

export default [fetchWordsEpic$]
