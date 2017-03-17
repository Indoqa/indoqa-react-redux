import {connect} from 'react-redux'
import Result from './Result.react'
import {selectResult, selectError, selectLoadingFlag} from '../store/time.selectors'

const mapStateToProps = (state) => ({
  result: selectResult(state),
  error: selectError(state),
  isLoading: selectLoadingFlag(state)
})

const mapDispatchToProps = () => ({
  //
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)
