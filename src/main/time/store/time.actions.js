// @flow

import {FetchTimeAction, ClearTimeAction} from '../types/TimeActions'

export const FETCH_TIME = 'FETCH_TIME'
export const FETCH_TIME_SUCCESS = 'FETCH_TIME_SUCCESS'
export const FETCH_TIME_ERROR = 'FETCH_TIME_ERROR'
export const CLEAR_TIME = 'CLEAR_TIME'

export const fetchTime = (lon: number, lat: number): FetchTimeAction => ({
  type: FETCH_TIME, lon, lat,
})

export const clearTime = (): ClearTimeAction => ({
  type: CLEAR_TIME,
})
