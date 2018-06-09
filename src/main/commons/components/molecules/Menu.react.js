// @flow
import {createComponent} from 'react-fela'

const Menu = ({theme}) => ({
  width: 300,
  height: '100%',
  backgroundColor: theme.colors.bgLight,
})

export default createComponent(Menu)
