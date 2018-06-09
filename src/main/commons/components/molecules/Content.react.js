// @flow
import {createComponent} from 'react-fela'
import {Box} from 'indoqa-react-fela'

const Content = ({theme}) => ({
  display: 'table-cell',
  padding: theme.spacing.space2,
  desktop: {
    marginLeft: theme.layout.menuWidth,
  },
  tablet: {
    marginLeft: theme.layout.menuWidth,
  },
})

export default createComponent(Content, Box)
