// @flow
import {Result} from '../types/Result'
import React, {PropTypes} from 'react'

type Props = {
  result: Result,
  error: string,
  isLoading: boolean
};

export default ({result, error, isLoading}: Props) => {
  if (isLoading) {
    return <span> loading.. </span>
  }

  if (error) {
    return <span> ERROR fetching time: {error} </span>
  }

  if (!result) {
    return <span> Select a location! </span>
  }

  return (
    <div>
      <div> current time: {result.time} </div>
      <div> country: {result.countryName} </div>
      <div> timezone: {result.timezoneId} </div>
    </div>
  )
}

