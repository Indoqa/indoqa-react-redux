// @flow
import {createComponent} from 'react-fela'

const Menu = ({theme}) => ({
  width: theme.layout.menuWidth,
  height: '100%',
  backgroundColor: theme.colors.bgLight,
})

export default createComponent(Menu)
