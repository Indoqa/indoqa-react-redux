// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'

type Props = {
  results: Array<string>,
}

const renderWords = (results: Array<string>) => {
  return results.map((word) => (
    <li key={word}>{word}</li>
  ))
}

const WordsResults = ({results}: Props) => {
  return (
    <Box mt={1}>
      <ul>
        {renderWords(results)}
      </ul>
    </Box>
  )
}

export default WordsResults
