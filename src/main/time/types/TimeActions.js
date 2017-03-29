// @flow
import type {Action} from 'redux'

export interface TimeAction extends Action {}

export interface FetchTimeAction extends TimeAction {
  lon: number,
  lat: number
}

export interface ClearTimeAction extends TimeAction {}
