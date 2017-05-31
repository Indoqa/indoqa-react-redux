import React, {PropTypes} from 'react'
import {Box, Flex} from 'indoqa-react-fela'
import {ThemeProvider} from 'react-fela'
import merge from 'deepmerge'

import {theme as baseTheme} from '../../../fela/theme'
import theme from '../../../theme.js'

import Bar from '../molecules/Bar.react'
import Content from '../molecules/Content.react'
import MainMenu from '../organisms/MainMenu.react'

const buildTheme = (customTheme) => {
  return merge(baseTheme, customTheme)
}

const MainMenuTemplate = ({title, header, children}) => (
  <ThemeProvider theme={buildTheme(theme)}>
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
  </ThemeProvider>
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
