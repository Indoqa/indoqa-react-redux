// @flow
import * as React from 'react'
import {Box, Flex} from 'indoqa-react-fela'

import i18n from '../../../app/i18n'
import Bar from '../molecules/Bar.react'
import Content from '../molecules/Content.react'
import MainMenu from '../organisms/MainMenu.react'

type Props = {
  children?: React.Node,
  header?: string | null,
  title?: string,
}

const changeLanguage = (lng) => i18n.changeLanguage(lng)

const MainMenuTemplate = ({title, header, children}: Props) => (
  <Flex stretch height="100%">
    <MainMenu />
    <Box grow={1}>
      <Bar pl={1} pr={1}>
        <Box>{title}</Box>
        <Box grow={1} />
        <Box>{header}</Box>
        <Box>
          <a onClick={() => changeLanguage('en')}>en</a> |
          <a onClick={() => changeLanguage('de')}> de </a>
        </Box>
      </Bar>
      <Content grow={1}>
        {children}
      </Content>
    </Box>
  </Flex>
)

MainMenuTemplate.defaultProps = {
  title: '',
  header: null,
  children: null,
}

export default MainMenuTemplate
