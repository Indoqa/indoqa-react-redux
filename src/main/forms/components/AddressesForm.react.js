// @flow
import * as React from 'react'
import {FieldArray} from 'formik'
import {Box, Flex, Text} from 'indoqa-react-fela'

import FormRow from './FormRow'

type Props = {
  values: any,
  errors: any,
  touched: any,
}

const EMPTY_ADDRESS = {
  street: '',
  city: '',
  zipCode: '',
  country: '',
}

const renderAddressFormActions = (arrayHelpers, count, index) => {
  return (
    <Box>
      <Text mr={1}>Address</Text>
      <button
        type="button"
        onClick={() => arrayHelpers.remove(index)}
      >
        -
      </button>
      {index < count - 1 ?
        <button
          type="button"
          onClick={() => arrayHelpers.move(index, index + 1)}
        >
          down
        </button>
        : null
      }
      {index > 0 ?
        <button
          type="button"
          onClick={() => arrayHelpers.move(index, index - 1)}
        >
          up
        </button>
        : null
      }
    </Box>
  )
}

const renderAddressForm = (arrayHelpers, values, errors, touched, address, index) => {
  return (
    <Flex key={index} mt={2}>
      <Box>
        {renderAddressFormActions(arrayHelpers, values.length, index)}

        <FormRow name={`addresses.${index}.street`} label="Street" errors={errors} touched={touched} />
        <FormRow name={`addresses.${index}.city`} label="City" errors={errors} touched={touched} />
        <FormRow name={`addresses.${index}.zipCode`} label="Zip code" errors={errors} touched={touched} />
        <FormRow name={`addresses.${index}.country`} label="Country" errors={errors} touched={touched} />
      </Box>
    </Flex>
  )
}

const renderHeader = (arrayHelpers) => {
  return (
    <Box>
      <Box>
        <Text mr={1}>Addresses</Text>
        <button
          type="button"
          onClick={() => arrayHelpers.push(EMPTY_ADDRESS)}
        >
          +
        </button>
      </Box>
    </Box>
  )
}

const renderForms = (arrayHelpers, values, errors, touched) => {
  const {addresses} = values

  if (!(addresses && addresses.length > 0)) {
    return null
  }
  return addresses.map((address, index) => (
    renderAddressForm(arrayHelpers, addresses, errors, touched, address, index)
  ))
}

const AddressesForm = ({values, errors, touched}:Props) => {
  return (
    <FieldArray
      name="addresses"
      render={(arrayHelpers) => (
        <Box mt={2}>
          {renderHeader(arrayHelpers)}
          {renderForms(arrayHelpers, values, errors, touched)}
        </Box>
      )}
    />
  )
}

export default AddressesForm
