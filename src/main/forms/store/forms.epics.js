import {Observable} from 'rxjs/Observable'
import {push} from 'react-router-redux'
import shortid from 'shortid'

import {selectUsers} from './forms.selectors'
import {setCurrentUser, saveUser} from './forms.actions'
import {createNewUser} from './forms.factory'

const selectUser = (id, state) => {
  if (id === undefined) {
    return createNewUser()
  }

  const user = selectUsers(state)[id]
  if (user === undefined) {
    throw Error(`User with id '${id}' does not exist.`)
  }
  return user
}

const postUser = (user) => {
  if (user.id === '') {
    user.id = shortid.generate()
  }
  return saveUser(user)
}

const loadCurrentUserEpic$ = (action$, store) =>
  action$
    .ofType('FORMS_LOAD_USER')
    .map((action) => setCurrentUser(selectUser(action.id, store.getState())))

const postUserEpic$ = (action$) =>
  action$
    .ofType('FORMS_POST_USER')
    .mergeMap((action) => {
      // Formik does not allow setting initial errors, hence this work-around is necessary to pass the setErrors method of the form
      // see https://github.com/jaredpalmer/formik/issues/288
      const {user, setErrors} = action
      if (user.name.startsWith('G')) {
        setErrors({name: 'Names starting with \'G\' are not allowed.'})
        // do not emit an action observable in the case of an error
        return Observable.of().ignoreElements()
      }

      return Observable.merge(
        Observable.of(postUser(action.user)),
        Observable.of(push('/forms'))
      )
    })

export default [loadCurrentUserEpic$, postUserEpic$]
