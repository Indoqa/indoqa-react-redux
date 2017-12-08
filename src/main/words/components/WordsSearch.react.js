// @flow
import * as React from 'react'

type Props = {
  fetchWords: Function,
}

const WordsSearch = ({fetchWords}: Props) => {
  return (
    <input
      type="text"
      placeholder="Search for an English word"
      onChange={(e) => fetchWords(e.currentTarget.value)}
    />
  )
}

export default WordsSearch
