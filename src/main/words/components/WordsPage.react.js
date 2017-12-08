// @flow
import React, {Component} from 'react'
import {Box} from 'indoqa-react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import WordsSearch from './WordsSearch.redux'
import WordsResults from './WordsResults.redux'

type Props = {}

class WordsPage extends Component<Props> {

  render() {
    return (
      <MainMenuTemplate title="Time">
        <Box>
          <WordsSearch />
          <WordsResults />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default WordsPage
