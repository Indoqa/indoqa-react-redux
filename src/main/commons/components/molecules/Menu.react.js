// @flow
import {createComponent} from 'react-fela'

const Menu = ({theme}) => ({
  height: '100%',
  width: 300,
  backgroundColor: theme.colors.bgLight,
})

export default createComponent(Menu)
