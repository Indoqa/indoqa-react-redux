// @flow
import {createComponentWithProxy} from 'react-fela'
import {Box} from 'indoqa-react-fela'

const Logo = () => {
  return ({
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    height: 50,
    fontWeight: 'bold',
  })
}

export default createComponentWithProxy(Logo, Box)
