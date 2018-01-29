// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'
import SimpleForm from './SimpleForm.react.js'

type Props = {}

class FormsPage extends React.Component<Props> {

  render() {
    return (
      <MainMenuTemplate title="Forms">
        <Box m={1}>
          <SimpleForm />
        </Box>
      </MainMenuTemplate>
    )
  }
}

export default FormsPage
