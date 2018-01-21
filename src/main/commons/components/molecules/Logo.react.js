// @flow
import {createComponentWithProxy} from 'react-fela'

const Logo = ({theme}) => {
  return ({
    height: '50px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    padding: theme.spacing.space1,
  })
}

export default createComponentWithProxy(Logo, 'div')
