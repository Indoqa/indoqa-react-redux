import {createComponent} from 'react-fela'

const Button = ({theme}) => ({
  color: theme.colors.text,
})

export default createComponent(Button, 'button', ['onClick'])
