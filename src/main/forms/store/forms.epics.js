/* eslint-disable prefer-template */
import {selectUsers} from './forms.selectors'
import {setCurrentUser} from './forms.actions'

const selectUser = (id, state) => {
  return selectUsers(state).filter((user) => user.id === id)[0]
}

const loadCurrentUserEpic$ = (action$, store) =>
  action$
    .ofType('FORMS_LOAD_USER')
    .map((action) => setCurrentUser(selectUser(action.id, store.getState())))

export default [loadCurrentUserEpic$]
