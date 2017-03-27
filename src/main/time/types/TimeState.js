// @flow
import type {Result} from './result'

export type TimeState = {
  result: ?Result,
  error: ?string,
  isLoading: boolean
}
