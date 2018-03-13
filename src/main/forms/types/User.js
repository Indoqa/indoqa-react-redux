// @flow
import type {Address} from './Address'

export type User = {
  id: string,
  name: string,
  email: string,
  addresses: Array<Address>,
  lastModified: Date,
}
