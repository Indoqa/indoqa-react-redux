// @flow
import type {User} from './User'

export type FormsState = {
  +users: Array<User>,
  +currentUser: ?User,
}
