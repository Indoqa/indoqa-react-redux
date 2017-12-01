// @flow
import type {Coordinates} from './Coordinates'

type FetchTimeAction = {
  type: 'FETCH_TIME',
  lon: number,
  lat: number,
}

type FetchTimesAction = {
  type: 'FETCH_TIMES',
  coordinates: Array<Coordinates>,
}

type FetchTimeSuccessAction = {
  type: 'FETCH_TIME_SUCCESS',
  payload: any,
}

type FetchTimesSuccessAction = {
  type: 'FETCH_TIMES_SUCCESS',
  payload: any,
}

type FetchTimeErrorAction = {
  type: 'FETCH_TIME_ERROR',
  payload: any,
}

type CLEAR_TIME = {
  type: 'CLEAR_TIME',
}

export type Action =
  | FetchTimeAction
  | FetchTimesAction
  | FetchTimeSuccessAction
  | FetchTimesSuccessAction
  | FetchTimeErrorAction
  | CLEAR_TIME
