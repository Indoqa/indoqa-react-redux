// @flow
import * as React from 'react'
import {Box, Text} from 'indoqa-react-fela'

type Props = {
  fetchWords: Function,
  cancelFetchWords: Function,
  error: string,
  isLoadingFlag: boolean,
}

const WordsSearch = ({fetchWords, cancelFetchWords, isLoadingFlag, error}: Props) => {
  return (
    <Box>
      <Box>
        <input
          type="text"
          placeholder="Search for an English word"
          onChange={(e) => fetchWords(e.currentTarget.value)}
        />
        {isLoadingFlag && <button onClick={cancelFetchWords}>Cancel</button>}
      </Box>
      {error && <Text>{error}</Text>}
    </Box>
  )
}

export default WordsSearch
