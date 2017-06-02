// @flow
import type {Todo} from './Todo'

export type TodoState = {
  todos: Todo[],
  filter: ?string,
}
