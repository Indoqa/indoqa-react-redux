// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import Buttons from './Buttons.redux'
import Result from './Result.redux'

class TimePage extends React.Component {

  render() {
    return (
      <MainMenuTemplate title="Time">
        <Box m={1}>
          <Buttons />
          <Result />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default TimePage
