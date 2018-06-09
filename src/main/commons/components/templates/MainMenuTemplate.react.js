// @flow
import * as React from 'react'
import {Box, Text, Flex} from 'indoqa-react-fela'
import DocumentTitle from 'react-document-title'
import {createComponentWithProxy} from 'react-fela'
import {Link} from 'react-router-dom'
import BreakpointObserver from 'breakpoint-observer'

import {BREAKPOINTS} from '../../../app/breakpoints'
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

type Breakpoint = "mobile" | "tablet" | "desktop"

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

const Main = createComponentWithProxy(({theme}) => ({
  height: `calc(100% - ${theme.layout.actionBarHeight}px)`,
}), Flex)

const MenuIcon = createComponentWithProxy(({theme}) => ({
  marginRight: theme.spacing.space2,
}), Text)


class MainMenuTemplate extends React.Component<Props, State> {

  static defaultProps = {
    title: '',
    header: null,
    children: null,
  }

  state = {
    showMobileMenu: false,
  }

  hideMenu() {
    this.setState({showMobileMenu: false})
  }

  toggleMenu() {
    this.setState({showMobileMenu: !this.state.showMobileMenu})
  }

  renderMenuIcon() {
    return (
      <BreakpointObserver breakpoints={BREAKPOINTS}>
        {(breakpoint: Breakpoint) => {
          if (breakpoint === 'mobile') {
            return <MenuIcon onClick={() => this.toggleMenu()}>[Menu]</MenuIcon>
          }
          return null
        }}
      </BreakpointObserver>
    )
  }

  renderMenu() {
    const y = this.state.showMobileMenu
    return (
      <BreakpointObserver breakpoints={BREAKPOINTS}>
        {(breakpoint: Breakpoint) => {
          console.log(`renderMenu: breakpoint=${breakpoint}, showMobileMenu=${y}`)
          if (breakpoint !== 'mobile' || (breakpoint === 'mobile' && y)) {
            return <MainMenu key={breakpoint + y} />
          }
          return null
        }}
      </BreakpointObserver>
    )
  }

  render() {
    const {title, header, children} = this.props
    const documentTitle = title === undefined ? BASE_TITLE : `${BASE_TITLE} | ${title}`
    return (
      <Flex stretch height="100%">
        <DocumentTitle title={documentTitle} />
        <BreakpointObserver breakpoints={BREAKPOINTS} callback={this.hideMenu} />
        <Box grow={1}>
          <Bar pl={2} pr={2}>
            {this.renderMenuIcon()}
            {renderHeaderContent(title, header)}
            {renderLanguageSwitcher()}
          </Bar>
          <Main>
            {this.renderMenu()}
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
