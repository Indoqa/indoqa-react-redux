// @flow
import * as React from 'react'
import {Box, Text, Flex} from 'indoqa-react-fela'

import i18n from '../../../app/i18n'
import Bar from '../molecules/Bar.react'
import Content from '../molecules/Content.react'
import MainMenu from '../organisms/MainMenu.react'

type Props = {
  children?: React.Node,
  header?: string | null,
  title?: string,
}

const changeLanguage = (lang:string) => i18n.changeLanguage(lang)

const renderLanguage = (lang: string) => {
  if (lang === i18n.language) {
    return <Text>{lang}</Text>
  }
  return (
    <a href="#" onClick={() => changeLanguage(lang)}>{lang}</a>
  )
}

const renderLanguageSwitcher = () => (
  <Box>
    {renderLanguage('en')} | {renderLanguage('de')}
  </Box>
)

const renderHeaderContent = (title?:string, header?:string | null) => (
  <React.Fragment>
    <Box>{title}</Box>
    <Box grow={1} />
    <Box mr={3}>{header}</Box>
  </React.Fragment>
)
const MainMenuTemplate = ({title, header, children}: Props) => {
  return (
    <Flex stretch height="100%">
      <MainMenu />
      <Box grow={1}>
        <Bar pl={1} pr={1}>
          {renderHeaderContent(title, header)}
          {renderLanguageSwitcher()}
        </Bar>
        <Content grow={1}>
          {children}
        </Content>
      </Box>
    </Flex>
  )
}

MainMenuTemplate.defaultProps = {
  title: '',
  header: null,
  children: null,
}

export default MainMenuTemplate
