// @flow
import {connect} from 'react-redux'

import {fetchWords, cancelFetchWords} from '../store/words.actions'
import WordsSearch from './WordsSearch.react'
import {selectError, selectLoadingFlag, selectPrefix, selectResults} from '../store/words.selectors'

import type {WordsState} from '../types/WordsState'

const mapStateToProps = (state: WordsState) => ({
  prefix: selectPrefix(state),
  results: selectResults(state),
  error: selectError(state),
  isLoadingFlag: selectLoadingFlag(state),
})

export default connect(mapStateToProps, {fetchWords, cancelFetchWords})(WordsSearch)
