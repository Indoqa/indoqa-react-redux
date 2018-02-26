// @flow
import * as React from 'react'
import {Form, Field, FieldArray, Formik} from 'formik'
import {createComponent} from 'react-fela'
import {Box, Flex, Text} from 'indoqa-react-fela'
import yup from 'yup'

type Props = {
  user: any,
}

const UserLabel = createComponent(() => ({
  display: 'inline-block',
  width: '100',
}), 'label')

const Row = createComponent(() => ({
  marginTop: 3,
  marginBottom: 3,
}))

const validationSchema = () => {
  return yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required('E-mail is required!!!'),
    addresses: yup.array().of(yup.object().shape({
      country: yup.string().required(),
    })),
  })
}

const EMPTY_ADDRESS = {
  street: '',
  city: '',
  zipCode: '',
  country: '',
}

const renderAddressForm = (arrayHelpers, addresses, address, index) => {
  return (
    <Flex key={index}>
      <Box>
        <Row>
          <UserLabel>Street</UserLabel>
          <Field name={`addresses.${index}.street`} />
        </Row>
        <Row>
          <UserLabel>City</UserLabel>
          <Field name={`addresses.${index}.city`} />
        </Row>
        <Row>
          <UserLabel>Zip code</UserLabel>
          <Field name={`addresses.${index}.zipCode`} />
        </Row>
        <Row>
          <UserLabel>Country</UserLabel>
          <Field name={`addresses.${index}.country`} />
        </Row>
      </Box>
      <Box ml={2}>
        <button
          type="button"
          onClick={() => arrayHelpers.remove(index)}
        >
          -
        </button>
        {index < addresses.length - 1 ?
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
    </Flex>
  )
}

const UserForm = ({user}:Props) => {
  return (
    <Formik
      displayName="UserForm"
      onSubmit={(values) => console.log(values)}
      initialValues={user}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}
      render={({values}) => (
        <Form>
          <Row>
            <UserLabel>Name</UserLabel>
            <Field
              name="name"
              render={({field}) => (
                <input {...field} />
              )}
            />
          </Row>
          <Row>
            <UserLabel>E-Mail</UserLabel>
            <Field
              name="email"
              render={({field}) => (
                <input {...field} />
              )}
            />
          </Row>

          <FieldArray
            name="addresses"
            render={arrayHelpers => (
              <Box>
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
                    renderAddressForm(arrayHelpers, values.addresses, address, index)
                  )))
                  : null
                }
              </Box>
            )}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    />
  )
}

export default UserForm
