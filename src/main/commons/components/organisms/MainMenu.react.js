// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'
import {Link} from 'react-router-dom'

import Logo from '../molecules/Logo.react.js'
import Menu from '../molecules/Menu.react.js'
import MenuLink from '../molecules/MenuLink.react.js'

const MainMenu = () => (
  <Menu>
    <Logo ml={2}>
      <Link to="/">INDOQA: React-Redux samples</Link>
    </Logo>
    <Box mb={3} />
    <MenuLink>
      <Link to="/">Time</Link>
    </MenuLink>
    <MenuLink>
      <Link to="/todos">Todos</Link>
    </MenuLink>
    <MenuLink>
      <Link to="/words">Words</Link>
    </MenuLink>
    <MenuLink>
      <Link to="/forms">Forms</Link>
    </MenuLink>
  </Menu>
)

export default MainMenu
