// @flow
import React from 'react'
import {Link} from 'react-router-dom'
import {createComponent} from 'react-fela'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate.react'

type Props = {}

const Headline = createComponent(({theme}) => ({
  fontSize: theme.fontSizes.big,
  fontWeight: 'bold',
  marginTop: theme.spacing.space2,
  marginBottom: theme.spacing.space1,
}), 'h1')

const Para = createComponent(({theme}) => ({
  lineHeight: '125%',
  marginBottom: theme.spacing.space1,
}), 'p')

const List = createComponent(({theme}) => ({
  listStyleType: 'square',
  listStylePosition: 'outside',
  paddingLeft: theme.spacing.space3,
}), 'ul')

const ListItem = createComponent(({theme}) => ({
  lineHeight: '125%',
  marginBottom: theme.spacing.space1,
}), 'li')

class OverviewPage extends React.Component<Props> {

  render() {
    return (
      <MainMenuTemplate title="Overview">
        <Para>Welcome to the Indoqa React-Redux samples. Each of these samples demonstrates
           particular technologies from the React-Redux ecosystem.
        </Para>
        <Headline>
          <Link to="/time">Time</Link>
        </Headline>
        <List>
          <ListItem>
            tbd
          </ListItem>
        </List>
        <Headline>
          <Link to="/todos">Todos</Link>
        </Headline>
        <List>
          <ListItem>
            tbd
          </ListItem>
        </List>
        <Headline>
          <Link to="/words">Words</Link>
        </Headline>
        <List>
          <ListItem>
            tbd
          </ListItem>
        </List>
        <Headline>
          <Link to="/forms">Forms</Link>
        </Headline>
        <List>
          <ListItem>
            tbd
          </ListItem>
        </List>
      </MainMenuTemplate>
    )
  }
}

export default OverviewPage
