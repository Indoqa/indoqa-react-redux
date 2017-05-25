// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'
import {Link} from 'react-router'

import Logo from '../molecules/Logo.react.js'
import Menu from '../molecules/Menu.react.js'
import MenuLink from '../molecules/MenuLink.react.js'

const MainMenu = () => (
  <Menu>
    <Logo>
      INDOQA-REACT-REDUX
    </Logo>
    <Box />
    <MenuLink>
      <Link to="/">Time</Link>
    </MenuLink>
    <MenuLink>
      <Link to="/todos">Todos</Link>
    </MenuLink>
  </Menu>
)

export default MainMenu
