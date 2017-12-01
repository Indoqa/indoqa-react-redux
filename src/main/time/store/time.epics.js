import {ajax} from 'rxjs/observable/dom/ajax'
import {forkJoin} from 'rxjs/observable/forkJoin'

import {fetchTimesSuccess, fetchTimeSuccess} from './time.actions'

const url = (lon, lat) =>
  `/geonames/timezoneJSON?formatted=true&lng=${lon}&lat=${lat}&username=indoqa_react_redux&style=full`

const fetchTimeEpic$ = (action$) =>
  action$
    .ofType('FETCH_TIME')
    .switchMap((action) => ajax.getJSON(url(action.lon, action.lat)))
    .map((timeZoneInfo) => fetchTimeSuccess(timeZoneInfo))

const fetchTimesEpic$ = (action$) =>
  action$
    .ofType('FETCH_TIMES')
    // produce multiple observables
    .map((action) => action.coordinates.map((c) => ajax.getJSON(url(c.lon, c.lat))))
    // execute multiple requests
    .mergeMap((requests) => forkJoin(requests))
    // results -> store
    .map((timezoneInfos) => fetchTimesSuccess(timezoneInfos))

export default [fetchTimeEpic$, fetchTimesEpic$]
