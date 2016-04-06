import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const App = ({children}) => (
  <div>
    <h2>Indoqa React/Redux Example</h2>
    <Link to={'/'} activeClassName="active"> Geonames Timezone API Example</Link> |
    <Link to={'/todos'} > Todo Example</Link>
    <hr />
    <br />
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
