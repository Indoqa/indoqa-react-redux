// @flow
import React from 'react'
import {Box, Text} from 'indoqa-react-fela'

import type {Result} from '../types/Result'

type Props = {
  results: Array<Result>,
  error: string,
  isLoading: boolean
};

const renderResult = (result: Result) => {
  return (
    <Box key={result.timezoneId}>
      <Box>current time: {result.time}</Box>
      <Box>country: {result.countryName}</Box>
      <Box>timezone: {result.timezoneId}</Box>
      <hr />
    </Box>
  )
}

export default ({results, error, isLoading}: Props) => {
  if (isLoading) {
    return (
      <Text>
        loading...
      </Text>
    )
  }

  if (error) {
    return (
      <Text>
        ERROR fetching time: {error}
      </Text>
    )
  }

  if (!results || results.length === 0) {
    return (
      <Text>
        Select a location!
      </Text>
    )
  }

  return (
    <Box>
      {results.map(renderResult)}
    </Box>
  )
}
