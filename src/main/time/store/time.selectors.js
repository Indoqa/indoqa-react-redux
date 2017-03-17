// @flow

import type {TimeState} from '../types/TimeState'
import {createSelector} from 'reselect'
import {selectTimeState} from '../../selectors'

export const selectResult = createSelector(selectTimeState, (state: TimeState) => state.result)
export const selectError = createSelector(selectTimeState, (state: TimeState) => state.error)
export const selectLoadingFlag = createSelector(selectTimeState, (state: TimeState) => state.isLoading)