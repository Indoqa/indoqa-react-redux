import {Observable} from 'rxjs'
import {forkJoin} from 'rxjs/observable/forkJoin'

import {fetchTimeError, fetchTimesSuccess, fetchTimeSuccess} from './time.actions'

const url = (lon, lat) => {
  if (lon === -1000) {
    return '/geonames/non-existing-path'
  }
  return `/geonames/timezoneJSON?formatted=true&lng=${lon}&lat=${lat}&username=indoqa_react_redux&style=full`
}

const fetchTimeEpic$ = (action$, store, deps) =>
  action$
    .ofType('FETCH_TIME')
    .switchMap((action) => {
      return deps
        .ajax
        .getJSON(url(action.lon, action.lat))
        .map((timeZoneInfo) => fetchTimeSuccess(timeZoneInfo))
        .catch((err) => Observable.of(fetchTimeError(err.message)))
    })

const fetchTimesEpic$ = (action$, store, deps) =>
  action$
    .ofType('FETCH_TIMES')
    // produce multiple observables
    .map((action) => action.coordinates.map((c) => {
      return deps
        .ajax
        .getJSON(url(c.lon, c.lat))
        // throw an error if one of the requests fails
        .catch((err) => Observable.throw(err))
    }))
    // execute multiple requests
    .mergeMap((requests) => {
      return forkJoin(requests)
        .map((timezoneInfos) => fetchTimesSuccess(timezoneInfos))
        // if any of the requests failed, forkJoin fails -> finally deal with the error here
        .catch((err) => Observable.of(fetchTimeError(err.message)))
    })

export {fetchTimeEpic$}
export default [fetchTimeEpic$, fetchTimesEpic$]
