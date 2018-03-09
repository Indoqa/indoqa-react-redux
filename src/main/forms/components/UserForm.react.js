// @flow
import * as React from 'react'
import {Form, FieldArray, Formik} from 'formik'
import {Box, Flex, Text} from 'indoqa-react-fela'
import yup from 'yup'

import FormRow from './FormRow'

type Props = {
  user: any,
}

const validationSchema = () => {
  return yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required('E-mail is required'),
    addresses: yup.array().of(yup.object().shape({
      country: yup.string().required('Country is required'),
      zipCode: yup.string().required('ZIP code is required'),
    })),
  })
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

const renderAddressForms = (values, errors, touched) => {
  return (
    <FieldArray
      name="addresses"
      render={arrayHelpers => (
        <Box mt={2}>
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
          {values.addresses && values.addresses.length > 0 ? (
              values.addresses.map((address, index) => (
                renderAddressForm(arrayHelpers, values.addresses, errors, touched, address, index)
              )))
            : null
          }
        </Box>
      )}
    />
  )
}

const UserForm = ({user}:Props) => {
  return (
    <Formik
      displayName="UserForm"
      onSubmit={(values) => console.log(values)}
      initialValues={user}
      validateOnChange={false}
      validationSchema={validationSchema}
      render={({values, errors, touched}) => {
        return (
          <Form>
            <FormRow name="name" label="Name" errors={errors} touched={touched} />
            <FormRow name="email" label="E-Mail" errors={errors} touched={touched} />

            {renderAddressForms(values, errors, touched)}

            <Box mt={2}>
              <button type="submit">Submit</button>
            </Box>
          </Form>
        )
      }}
    />
  )
}

export default UserForm
