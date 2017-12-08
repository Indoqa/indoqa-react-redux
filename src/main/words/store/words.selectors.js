// @flow
import {createSelector} from 'reselect'
import {selectWordsState} from '../../app/selectors.js'
import type {WordsState} from '../types/WordsState'

export const selectResults = createSelector(selectWordsState, (state: WordsState) => state.results)
export const selectLoadingFlag = createSelector(selectWordsState, (state: WordsState) => state.isLoading)
