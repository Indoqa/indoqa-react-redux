// @flow

import type {Action} from '../types/TimeActions'
import type {Coordinates} from '../types/Coordinates'

export const fetchTime = (lon: number, lat: number): Action => ({
  type: 'FETCH_TIME',
  lon,
  lat,
})

export const fetchTimes = (coordinates: Array<Coordinates>): Action => ({
  type: 'FETCH_TIMES',
  coordinates,
})

export const fetchTimeSuccess = (payload: any): Action => ({
  type: 'FETCH_TIME_SUCCESS',
  payload: [payload],
})

export const fetchTimeError = (payload: any): Action => ({
  type: 'FETCH_TIME_ERROR',
  payload,
})

export const fetchTimesSuccess = (payload: any): Action => ({
  type: 'FETCH_TIMES_SUCCESS',
  payload,
})

export const clearTime = (): Action => ({
  type: 'CLEAR_TIME',
})
