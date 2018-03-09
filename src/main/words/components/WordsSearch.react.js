// @flow
import * as React from 'react'
import {Box, Text} from 'indoqa-react-fela'
import {createComponentWithProxy} from 'react-fela'

type Props = {
  fetchWords: Function,
  cancelFetchWords: Function,
  prefix: string,
  error: string,
  isLoadingFlag: boolean,
}

const InputField = createComponentWithProxy(({theme}) => ({
  width: 300,
  padding: 4,
  marginRight: theme.spacing.space2,
}), 'input')


const WordsSearch = ({fetchWords, cancelFetchWords, prefix, isLoadingFlag, error}: Props) => {
  return (
    <Box>
      <Box>
        <InputField
          type="text"
          placeholder="Search for an English word"
          onChange={(e) => fetchWords(e.currentTarget.value)}
          value={prefix}
        />
        {isLoadingFlag && <button onClick={cancelFetchWords}>Cancel</button>}
      </Box>
      {error && <Text>{error}</Text>}
    </Box>
  )
}

export default WordsSearch
