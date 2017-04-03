// @flow
type FetchTimeAction = {
  type: "FETCH_TIME",
  lon: number,
  lat: number
}

type FetchTimeSuccessAction = {
  type: "FETCH_TIME_SUCCESS",
  payload: any,
}

type FetchTimeErrorAction = {
  type: "FETCH_TIME_ERROR",
  payload: any,
}

type CLEAR_TIME = {
  type: "CLEAR_TIME",
}

export type Action =
  | FetchTimeAction
  | FetchTimeSuccessAction
  | FetchTimeErrorAction
  | CLEAR_TIME
