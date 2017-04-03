// @flow

import type {Action} from '../types/TimeActions'

export const fetchTime = (lon: number, lat: number): Action => ({
  type: 'FETCH_TIME',
  lon,
  lat,
})

export const fetchTimeSuccess = (payload: any): Action => ({
  type: 'FETCH_TIME_SUCCESS',
  payload,
})

export const clearTime = (): Action => ({
  type: 'CLEAR_TIME',
})
