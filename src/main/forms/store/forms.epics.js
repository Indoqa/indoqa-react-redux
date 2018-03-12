import {selectUsers} from './forms.selectors'
import {setCurrentUser} from './forms.actions'

const selectUser = (id, state) => {
  return selectUsers(state)[id]
}

const loadCurrentUserEpic$ = (action$, store) =>
  action$
    .ofType('FORMS_LOAD_USER')
    .map((action) => setCurrentUser(selectUser(action.id, store.getState())))

export default [loadCurrentUserEpic$]
