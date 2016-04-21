import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import './App.styl'

class App extends React.Component {

  render() {
    const {children} = this.props

    return (
      <div className="app">
        <h2>Indoqa React/Redux Example</h2>
        <Link to={'/'} activeClassName="active"> Geonames Timezone API Example</Link> |
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

// Note: top level route components NEED to be react classes and can't be written as functional components!
// Otherwise hot reloading won't work: https://github.com/gaearon/react-hot-loader/issues/212

