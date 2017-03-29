import * as R from 'ramda'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return R.append({
        id: action.id,
        text: action.text,
        completed: false,
      }, state)

    case 'TOGGLE_TODO': {
      const index = R.findIndex((item) => item.id === action.id)(state)
      return R.adjust((item) => R.assoc('completed', !item.completed, item), index, state)
    }

    default:
      return state
  }
}

export default todos
