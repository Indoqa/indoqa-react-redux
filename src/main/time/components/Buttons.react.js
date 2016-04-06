import React, {PropTypes} from 'react'

const Buttons = ({loadVienna, loadNewYork, loadInvalidLocation}) => (
  <div>
    <div>
      <button onClick={loadVienna}> Vienna </button>
      <button onClick={loadNewYork}> New York </button>
      <button onClick={loadInvalidLocation}> Invalid Location </button>
    </div>
  </div>
)

Buttons.propTypes = {
  loadVienna: PropTypes.func,
  loadNewYork: PropTypes.func,
  loadInvalidLocation: PropTypes.func
}

export default Buttons
