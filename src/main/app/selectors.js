// @flow
import type {TimeState} from '../time/types/TimeState'
import type {TodoState} from '../todos/types/TodoState'

type State = {
  time: TimeState,
  todos: TodoState,
}

export const selectTimeState = (state: State) => state.time
export const selectTodoState = (state: State) => state.todos
