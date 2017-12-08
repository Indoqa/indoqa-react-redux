// @flow
import {connect} from 'react-redux'
import {selectResults} from '../store/words.selectors'

import type {WordsState} from '../types/WordsState'
import WordsResults from './WordsResults.react'

const mapStateToProps = (state: WordsState) => ({
  results: selectResults(state),
})

export default connect(mapStateToProps)(WordsResults)
