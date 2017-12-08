// @flow
import type {TimeState} from '../time/types/TimeState'
import type {TodoState} from '../todos/types/TodoState'
import type {WordsState} from '../words/types/WordsState'

type State = {
  time: TimeState,
  todos: TodoState,
  words: WordsState,
}

export const selectTimeState = (state: State) => state.time
export const selectTodoState = (state: State) => state.todos
export const selectWordsState = (state: State) => state.words
