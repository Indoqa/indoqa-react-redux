// @flow
import React, {Component} from 'react'
import {Box} from 'indoqa-react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import WordsSearch from './WordsSearch.redux'
import WordsResults from './WordsResults.redux'

class WordsPage extends Component<{}> {

  render() {
    return (
      <MainMenuTemplate title="Words">
        <Box m={1}>
          <WordsSearch />
          <WordsResults />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default WordsPage
