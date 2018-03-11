// @flow

import type {FormsState} from '../types/FormsState'
import type {User} from '../types/User'
import type {Action} from '../types/FormsActions'

const user1: User = {
  id: '34rrt5',
  name: 'Maier',
  email: 'w.maier@example.com',
  addresses: [
    {
      street: 'Schottenring 3',
      city: 'Vienna',
      zipCode: '1010',
      country: 'Austria',
    },
    {
      street: 'Heinrichstrasse 7',
      city: 'Graz',
      zipCode: '8010',
      country: 'Austria',
    }
  ],
}

const user2: User = {
  id: 'okhj7',
  name: 'Gruber',
  email: 'f.gruber@example.com',
  addresses: [],
}

const initialState: FormsState = {
  users: [user1, user2],
  currentUser: null,
}

export default (state: FormsState = initialState, action: Action) => {
  switch (action.type) {
    case 'FORMS_SAVE_USER':
      return state

    case 'FORMS_LOAD_USER':
      return {
        ...state,
        currentUser: null,
      }

    case 'FORMS_SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.currentUser,
      }

    default:
      return state
  }
}
