// @flow
import React from 'react'
import {Text, Box} from 'indoqa-react-fela'

import type {Result} from '../types/Result'

type Props = {
  result: Result,
  error: string,
  isLoading: boolean
};

export default ({result, error, isLoading}: Props) => {
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

  if (!result) {
    return (
      <Text>
        Select a location!
      </Text>
    )
  }

  return (
    <Box>
      <Box>current time: {result.time}</Box>
      <Box>country: {result.countryName}</Box>
      <Box>timezone: {result.timezoneId}</Box>
    </Box>
  )
}
