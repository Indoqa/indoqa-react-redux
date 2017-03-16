export const FETCH_TIME = 'FETCH_TIME'
export const FETCH_TIME_SUCCESS = 'FETCH_TIME_SUCCESS'
export const FETCH_TIME_ERROR = 'FETCH_TIME_ERROR'
export const CLEAR_TIME = 'CLEAR_TIME'

export const fetchTime = (lon, lat) => ({
  type: FETCH_TIME, lon, lat
})

export const clearTime = () => ({
  type: CLEAR_TIME
})
