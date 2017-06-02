// @flow
type AddTodoAction = {
  type: "ADD_TODO",
  text: string,
}

type SetFilterAction = {
  type: "SET_FILTER",
  filter: string,
}

type ToggleTodoAction = {
  type: "TOGGLE_TODO",
  id: number,
}

export type Action =
  | AddTodoAction
  | SetFilterAction
  | ToggleTodoAction
