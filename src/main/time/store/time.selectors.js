// @flow
import {createSelector} from 'reselect'

import type {TimeState} from '../types/TimeState'
import {selectTimeState} from '../../app/selectors.js'

export const selectResult = createSelector(selectTimeState, (state: TimeState) => state.result)
export const selectError = createSelector(selectTimeState, (state: TimeState) => state.error)
export const selectLoadingFlag = createSelector(selectTimeState, (state: TimeState) => state.isLoading)
