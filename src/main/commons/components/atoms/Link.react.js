import {Link as ReactRouterLink} from 'react-router'

import {createComponent} from 'react-fela'

// see https://github.com/rofrischmann/fela/issues/244
const Link = ({theme}) => ({
  color: theme.colors.c1,
})

export default createComponent(Link, ReactRouterLink, ['to'])
