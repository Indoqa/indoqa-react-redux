// @flow
import type {User} from './User'

export type FormsState = {
  +users: { [string]: User },
  +currentUser: ?User,
}
