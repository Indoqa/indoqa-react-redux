// @flow
import {createComponentWithProxy} from 'react-fela'

const ButtonLink = ({theme}) => ({
  '& > a': {
    color: theme.colors.text,
    display: 'block',
    height: '100%',
    textDecoration: 'none',
  },
})

export default createComponentWithProxy(ButtonLink, 'button')
