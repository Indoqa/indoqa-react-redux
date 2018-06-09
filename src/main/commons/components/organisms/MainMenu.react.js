// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'
import {NavLink} from 'react-router-dom'

import Menu from '../molecules/Menu.react.js'
import MenuLink from '../molecules/MenuLink.react.js'

const MainMenu = () => (
  <Menu>
    <Box pb={2} />
    <MenuLink>
      <NavLink to="/time">Time</NavLink>
    </MenuLink>
    <MenuLink>
      <NavLink to="/todos">Todos</NavLink>
    </MenuLink>
    <MenuLink>
      <NavLink to="/words">Words</NavLink>
    </MenuLink>
    <MenuLink>
      <NavLink to="/forms">Forms</NavLink>
    </MenuLink>
  </Menu>
)

export default MainMenu
