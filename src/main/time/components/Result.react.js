// @flow
import React from 'react'

import type {Result} from '../types/Result'

type Props = {
  result: Result,
  error: string,
  isLoading: boolean
}

export default ({result, error, isLoading}: Props) => {
  if (isLoading) {
    return (
      <span>
        loading...
      </span>
    )
  }

  if (error) {
    return (
      <span>
        ERROR fetching time: {error}
      </span>
    )
  }

  if (!result) {
    return (
      <span>
        Select a location!
      </span>
    )
  }

  return (
    <div>
      <div>current time: {result.time}</div>
      <div>country: {result.countryName}</div>
      <div>timezone: {result.timezoneId}</div>
    </div>
  )
}
