// @flow
import type {Action} from '../types/FormsActions'

import type {User} from '../types/User'

export const loadUser = (id: string): Action => ({
  type: 'FORMS_LOAD_USER',
  id,
})

export const saveUser = (user: User): Action => ({
  type: 'FORMS_SAVE_USER',
  user,
})

export const setCurrentUser = (currentUser: User): Action => ({
  type: 'FORMS_SET_CURRENT_USER',
  currentUser,
})
