// @flow
import {createComponent} from 'react-fela'
import {Box} from 'indoqa-react-fela'

const Content = ({theme}) => ({
  // height: `calc(100% - ${theme.layout.actionBarHeight}px)`,
  padding: theme.spacing.space2,
})

export default createComponent(Content, Box)
