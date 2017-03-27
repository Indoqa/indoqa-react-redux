import {connect} from 'react-redux'
import {fetchTime, clearTime} from '../store/time.actions'
import Buttons from './Buttons.react'

const mapDispatchToProps = (dispatch) => ({
  loadVienna: () => {
    dispatch(fetchTime(10, 47))
  },
  loadNewYork: () => {
    dispatch(fetchTime(-74.0059700, 40.7142700))
  },
  loadInvalidLocation: () => {
    dispatch(fetchTime(-1000, -1000))
  },
  clear: () => {
    dispatch(clearTime())
  },
})

export default connect(
  null,
  mapDispatchToProps
)(Buttons)
