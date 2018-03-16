// @flow
import {createComponentWithProxy} from 'react-fela'
import {Box} from 'indoqa-react-fela'

const Logo = ({theme}) => {
  return ({
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    height: 50,
    fontWeight: 'bold',
    '> a': {
      textDecoration: 'none',
      color: theme.colors.text,
    },
  })
}

export default createComponentWithProxy(Logo, Box)
