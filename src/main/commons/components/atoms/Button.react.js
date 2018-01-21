// @flow
import {createComponentWithProxy} from 'react-fela'

const Button = ({theme}) => ({
  color: theme.colors.text,
})

export default createComponentWithProxy(Button, 'button')
