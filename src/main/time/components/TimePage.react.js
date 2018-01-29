// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import Buttons from './Buttons.redux'
import Result from './Result.redux'

type Props = {}

class TimePage extends React.Component<Props> {

  render() {
    return (
      <MainMenuTemplate title="Time">
        <Box m={3}>
          <Buttons />
          <Result />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default TimePage
