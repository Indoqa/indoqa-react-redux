// @flow
import React from 'react'

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
    <ul>
      {renderWords(results)}
    </ul>
  )
}

export default WordsResults
