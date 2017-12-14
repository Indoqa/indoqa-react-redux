/* eslint-disable prefer-template */
import {Observable} from 'rxjs'
import {fetchWordsError, fetchWordsSuccess} from './words.actions'

const url = (prefix) => {
  return '/words/v4/words.json/search/' +
    prefix +
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

const fetchWordsEpic$ = (action$, store, {ajax, scheduler}) =>
  action$
    .ofType('FETCH_WORDS')
    // the scheduler is only needed for the test environment,
    // in the browser environment the scheduler is undefined and RxJS uses the default scheduler
    .debounceTime(150, scheduler)
    .switchMap((action) => {
      if (action.prefix === '') {
        return Observable.of(fetchWordsSuccess([]))
      }
      return ajax
        .getJSON(url(action.prefix))
        // artificially delay the execution of the ajax request for demo purpose
        .delay(1500, scheduler)
        // stop this observable stream until the FETCH_WORDS_CANCEL action is triggered
        .takeUntil(action$.ofType('FETCH_WORDS_CANCEL'))
        .map((json) => fetchWordsSuccess(json.searchResults.map((entry) => entry.word)))
        .catch((err) => Observable.of(fetchWordsError(err.message)))
    })

export default [fetchWordsEpic$]
