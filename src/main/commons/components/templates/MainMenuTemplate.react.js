import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex} from 'indoqa-react-fela'

import Bar from '../molecules/Bar.react'
import Content from '../molecules/Content.react'
import MainMenu from '../organisms/MainMenu.react'

const MainMenuTemplate = ({title, header, children}) => (
  <Flex stretch height={'100%'}>
    <MainMenu />
    <Box grow={1}>
      <Bar pl={1} pr={1}>
        <Box>{title}</Box>
        <Box grow={1} />
        <Box>{header}</Box>
      </Bar>
      <Content grow={1}>
        {children}
      </Content>
    </Box>
  </Flex>
)

MainMenuTemplate.propTypes = {
  title: PropTypes.string,
  header: PropTypes.element,
  children: PropTypes.element,
}

MainMenuTemplate.defaultProps = {
  title: '',
  header: null,
  children: null,
}

export default MainMenuTemplate
