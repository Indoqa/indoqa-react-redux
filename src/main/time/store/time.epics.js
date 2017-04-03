import {ajax} from 'rxjs/observable/dom/ajax'

import {fetchTimeSuccess} from './time.actions'

const url = (lon, lat) =>
  `/geonames/timezoneJSON?formatted=true&lng=${lon}&lat=${lat}&username=indoqa_react_redux&style=full`

const fetchTimeEpic$ = (action$) => {
  return action$
    .filter((action) => action.type === 'FETCH_TIME')
    .switchMap((action) => ajax.getJSON(url(action.lon, action.lat)))
    .map((json) => fetchTimeSuccess(json))
}

export default [fetchTimeEpic$]
