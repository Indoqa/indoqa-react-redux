// @flow
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {Box} from 'indoqa-react-fela'

type Props = {
  results: Array<string>,
}

const renderWords = (results: Array<string>) => {
  return results.map((word) => (
    <li key={word}><a href={`http://www.wordnik.com/words/${word}`} target="_blank">{word}</a></li>
  ))
}

const WordsResults = ({results}: Props) => {
  const poweredBy = (
    <Box mt={3}>
      <a href="http://wordnik.com/" target="_blank">
        <img alt="powered by Wordnik" src="http://www.wordnik.com/img/wordnik_badge_a2.png" />
      </a>
    </Box>
  )

  return (
    <Box mt={1}>
      <ul>
        {renderWords(results)}
      </ul>
      {results.length > 0 && poweredBy}
    </Box>
  )
}

export default WordsResults
