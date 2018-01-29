// @flow
import React from 'react'
import {Box} from 'indoqa-react-fela'

type Props = {
  addTodo: Function,
};

const AddTodo = ({addTodo}: Props) => {
  let input

  return (
    <Box mb={2} mt={2}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input || !input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <input
          ref={(node) => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </Box>
  )
}

export default AddTodo
