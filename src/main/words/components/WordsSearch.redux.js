// @flow
import {connect} from 'react-redux'

import {fetchWords, cancelFetchWords} from '../store/words.actions'
import WordsSearch from './WordsSearch.react'
import {selectError, selectLoadingFlag, selectResults} from '../store/words.selectors'

import type {WordsState} from '../types/WordsState'

const mapStateToProps = (state: WordsState) => ({
  results: selectResults(state),
  error: selectError(state),
  isLoadingFlag: selectLoadingFlag(state),
})

export default connect(mapStateToProps, {fetchWords, cancelFetchWords})(WordsSearch)
