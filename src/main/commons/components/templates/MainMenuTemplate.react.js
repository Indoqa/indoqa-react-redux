// @flow
import * as React from 'react'
import {Box, Text, Flex} from 'indoqa-react-fela'
import DocumentTitle from 'react-document-title'
import {createComponentWithProxy} from 'react-fela'
import {Link} from 'react-router-dom'

import i18n from '../../../app/i18n'
import Bar from '../molecules/Bar.react'
import Logo from '../molecules/Logo.react.js'
import Content from '../molecules/Content.react'
import MainMenu from '../organisms/MainMenu.react'

type Props = {
  children?: React.Node,
  header?: string | null,
  title?: string,
}

type State = {
  showMobileMenu: boolean,
}

const BASE_TITLE = 'Indoqa React-Redux samples'

const renderHeaderContent = (title?:string, header?:string | null) => (
  <React.Fragment>
    <Logo mr={1}>
      <Link to="/">INDOQA React-Redux samples</Link>
    </Logo>
    <Box>{title}</Box>
    <Box grow={1} />
    <Box mr={3}>{header}</Box>
  </React.Fragment>
)

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

const MOBILE_ONLY = {
  desktop: {
    display: 'none',
  },
  tablet: {
    display: 'none',
  },
}

const Main = createComponentWithProxy(({theme}) => ({
  display: 'table',
  paddingTop: theme.layout.actionBarHeight,
  height: '100%',
}), Flex)

const MenuIcon = createComponentWithProxy(({theme}) => ({
  marginRight: theme.spacing.space2,
  ...MOBILE_ONLY,
}), Text)

const FixedBar = createComponentWithProxy(() => ({
  position: 'fixed',
  width: '100%',
}), Box)

const MobileMenu = createComponentWithProxy(({theme}) => ({
  position: 'fixed',
  height: `calc(100% - ${theme.layout.actionBarHeight}px)`,
  top: theme.layout.actionBarHeight,
  ...MOBILE_ONLY,
}), Box)

const TabletDesktopMenu = createComponentWithProxy(() => ({
  display: 'none',
  desktop: {
    display: 'table-cell',
    height: '100%',
  },
  tablet: {
    display: 'table-cell',
    height: '100%',
  },
}), Box)

class MainMenuTemplate extends React.Component<Props, State> {

  static defaultProps = {
    title: '',
    header: null,
    children: null,
  }

  state = {
    showMobileMenu: false,
  }

  toggleMenu() {
    this.setState({showMobileMenu: !this.state.showMobileMenu})
  }

  renderMenuIcon() {
    return <MenuIcon onClick={() => this.toggleMenu()}>[Menu]</MenuIcon>
  }

  renderMobileMenu() {
    if (this.state.showMobileMenu) {
      return (
        <MobileMenu>
          <MainMenu />
        </MobileMenu>
      )
    }
    return null
  }

  render() {
    const {title, header, children} = this.props
    const documentTitle = title === undefined ? BASE_TITLE : `${BASE_TITLE} | ${title}`
    return (
      <Flex stretch height="100%">
        <DocumentTitle title={documentTitle} />
        {this.renderMobileMenu()}
        <Box grow={1}>
          <FixedBar>
            <Bar pl={2} pr={2}>
              {this.renderMenuIcon()}
              {renderHeaderContent(title, header)}
              {renderLanguageSwitcher()}
            </Bar>
          </FixedBar>
          <Main>
            <TabletDesktopMenu>
              <MainMenu />
            </TabletDesktopMenu>
            <Content>
              {children}
            </Content>
          </Main>
        </Box>
      </Flex>
    )
  }
}

export default MainMenuTemplate
