// @flow
import {createComponentWithProxy} from 'react-fela'

const MenuLink = ({theme}) => ({
  textTransform: 'uppercase',
  cursor: 'pointer',
  borderBottom: '1px solid #f5f5f5',
  padding: theme.spacing.space1,
  margin: theme.spacing.space1,
})

export default createComponentWithProxy(MenuLink, 'div')
