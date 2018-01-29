// @flow
import type {User} from './User'

type SaveUserAction = {
  type: 'FORMS_SAVE_USER',
  user: User,
}

type PostUserAction = {
  type: 'FORMS_POST_USER',
  user: User,
}

type LoadUserAction = {
  type: 'FORMS_LOAD_USER',
  id: string,
}

type SetCurrentUserAction = {
  type: 'FORMS_SET_CURRENT_USER',
  currentUser: User,
}

export type Action =
  | SaveUserAction
  | PostUserAction
  | LoadUserAction
  | SetCurrentUserAction
