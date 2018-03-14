import {Observable} from 'rxjs/Observable'
import {push} from 'react-router-redux'

import {selectUsers} from './forms.selectors'
import {setCurrentUser, saveUser} from './forms.actions'

const selectUser = (id, state) => {
  return selectUsers(state)[id]
}

const loadCurrentUserEpic$ = (action$, store) =>
  action$
    .ofType('FORMS_LOAD_USER')
    .map((action) => setCurrentUser(selectUser(action.id, store.getState())))

const postUserEpic$ = (action$) =>
  action$
    .ofType('FORMS_POST_USER')
    .mergeMap((action) => Observable.merge(
      Observable.of(saveUser(action.user)),
      Observable.of(push('/forms'))
    ))

export default [loadCurrentUserEpic$, postUserEpic$]
