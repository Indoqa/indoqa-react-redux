// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'

import Button from '../../commons/components/atoms/Button.react.js'

interface Props {
  loadVienna: () => void;
  loadNewYork: () => void;
  loadInvalidLocation: () => void;
  clear: () => void;
}

const Buttons = ({loadVienna, loadNewYork, loadInvalidLocation, clear}: Props) => (
  <Box mb={2}>
    <Button onClick={loadVienna}>Vienna</Button>
    <Button onClick={loadNewYork}>New York</Button>
    <Button onClick={loadInvalidLocation}>Invalid Location</Button>
    <Button onClick={clear}>Clear</Button>
  </Box>
)

export default Buttons
