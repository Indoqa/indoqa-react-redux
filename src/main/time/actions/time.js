import {fetchGeonames} from '../../app/utils/fetchApis'

export const FETCH_TIME = 'FETCH_TIME'

export const fetchTime = (lon, lat) => ({
  type: FETCH_TIME,
  payload: fetchGeonames(`/timezoneJSON?formatted=true&lng=${lon}&lat=${lat}&username=indoqa_react_redux&style=full`)
})
