import React from 'react'
import Buttons from './Buttons.redux'
import Result from './Result.redux'

class TimePage extends React.Component {
  render() {
    return (
      <div>
        <Buttons />
        <br />
        <Result />
      </div>
    )
  }
}

export default TimePage
