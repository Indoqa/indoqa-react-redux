// @flow
type FetchTimeAction = {
  type: "FETCH_TIME",
  lon: number,
  lat: number
}

type FetchTimeSuccessAction = {
  type: "FETCH_TIME_SUCCESS",
}

type FetchTimeErrorAction = {
  type: "FETCH_TIME_ERROR",
}

type CLEAR_TIME = {
  type: "CLEAR_TIME",
}

export type Action =
  | FetchTimeAction
  | FetchTimeSuccessAction
  | FetchTimeErrorAction
  | CLEAR_TIME
