// @flow
import type {Result} from './Result'

export type TimeState = {
  +results: ?Array<Result>,
  +error: ?string,
  +isLoading: boolean
}
