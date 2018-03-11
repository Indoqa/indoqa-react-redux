// @flow
import type {Action} from '../types/FormsActions'

import type {User} from '../types/User'

export const loadUser = (id: string): Action => ({
  type: 'FORMS_LOAD_USER',
  id,
})

export const setCurrentUser = (currentUser: User): Action => ({
  type: 'FORMS_SET_CURRENT_USER',
  currentUser,
})
