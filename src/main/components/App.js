import React, {PropTypes} from 'react'

const App = ({children}) => (
  <div>
    <h1>Test App</h1>
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
