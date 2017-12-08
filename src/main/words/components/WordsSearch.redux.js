// @flow
import {connect} from 'react-redux'

import {fetchWords} from '../store/words.actions'
import WordsSearch from './WordsSearch.react'
import {selectResults} from '../store/words.selectors'

import type {WordsState} from '../types/WordsState'

const mapStateToProps = (state: WordsState) => ({
  results: selectResults(state),
})

export default connect(mapStateToProps, {fetchWords})(WordsSearch)
