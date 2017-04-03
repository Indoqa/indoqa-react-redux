// @flow
import type {Result} from './Result'

export type TimeState = {
  result: ?Result,
  error: ?string,
  isLoading: boolean
}
