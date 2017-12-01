import {connect} from 'react-redux'
import {clearTime, fetchTime, fetchTimes} from '../store/time.actions'
import Buttons from './Buttons.react'

const mapDispatchToProps = (dispatch) => ({
  loadVienna: () => {
    dispatch(fetchTime(10, 47))
  },
  loadNewYork: () => {
    dispatch(fetchTime(-74.0059700, 40.7142700))
  },
  loadViennaAndNewYork: () => {
    const coordinates = []
    coordinates.push({lon: 10, lat: 47})
    coordinates.push({lon: -74.0059700, lat: 40.7142700})
    dispatch(fetchTimes(coordinates))
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
