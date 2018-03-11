// @flow
import {createSelector} from 'reselect'

import type {FormsState} from '../types/FormsState'
import {selectFormsState} from '../../app/selectors.js'

export const selectUsers = createSelector(selectFormsState, (state: FormsState) => state.users)
export const selectCurrentUser = createSelector(selectFormsState, (state: FormsState) => state.currentUser)
