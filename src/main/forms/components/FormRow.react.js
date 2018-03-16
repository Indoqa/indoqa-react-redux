// @flow
import * as React from 'react'
import {createComponent, createComponentWithProxy} from 'react-fela'
import {Field, getIn} from 'formik'
import {Text} from 'indoqa-react-fela'

type Props = {
  name: string,
  label: string,
  errors: any,
  touched: any,
}

const RowContainer = createComponent(() => ({
  marginTop: 3,
  marginBottom: 3,
}))

const UserLabel = createComponent(() => ({
  display: 'inline-block',
  width: '100',
}), 'label')

const InputField = createComponentWithProxy(({hasError}) => ({
  borderStyle: 'solid',
  borderWidth: 1,
  padding: 4,
  borderColor: hasError ? 'red' : 'grey',
  outline: 'none',
  boxShadow: 'none',
}), 'input')

const ErrorMessage = createComponent(() => ({
  color: 'red',
}), Text)

const renderLabel = (label) => {
  return (
    <UserLabel>{label}</UserLabel>
  )
}

const renderField = (name, hasError) => {
  return (
    <Field
      name={name}
      render={({field}) => (
        <InputField {...field} hasError={hasError} autoComplete="off" />
      )}
    />
  )
}

const renderError = (name, hasError, errors) => {
  if (!hasError) {
    return null
  }
  return (
    <ErrorMessage ml={1}>
      {getIn(errors, name)}
    </ErrorMessage>
  )
}

const FormRow = ({name, label, errors, touched}:Props) => {
  const hasError = getIn(touched, name) && getIn(errors, name)
  return (
    <RowContainer>
      {renderLabel(label)}
      {renderField(name, hasError)}
      {renderError(name, hasError, errors)}
    </RowContainer>
  )
}

export default FormRow
