import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import './App.styl'

class App extends React.Component {

  render() {
    const {children} = this.props
    return (
      <div className="app">
        <h2>Indoqa React/Redux Examples</h2>
        <Link to={'/'} activeClassName="active">Geonames Timezone API Example</Link> |
        <Link to={'/todos'} > Todo Example</Link>
        <hr />
        <br />
        {children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
