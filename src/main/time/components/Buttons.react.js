// @flow

import React from 'react'

const Buttons = ({loadVienna, loadNewYork, loadInvalidLocation, clear}: Props) => (
  <div>
    <div>
      <button onClick={loadVienna}> Vienna </button>
      <button onClick={loadNewYork}> New York </button>
      <button onClick={loadInvalidLocation}> Invalid Location </button>
      <button onClick={clear}> Clear </button>
    </div>
  </div>
)

interface Props {
  loadVienna: () => void;
  loadNewYork: () => void;
  loadInvalidLocation: () => void;
  clear: () => void;
}

export default Buttons
