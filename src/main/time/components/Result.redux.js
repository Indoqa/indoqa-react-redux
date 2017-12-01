import {connect} from 'react-redux'
import Result from './Result.react'
import {selectError, selectLoadingFlag, selectResults} from '../store/time.selectors'

const mapStateToProps = (state) => ({
  results: selectResults(state),
  error: selectError(state),
  isLoading: selectLoadingFlag(state),
})

export default connect(
  mapStateToProps
)(Result)
