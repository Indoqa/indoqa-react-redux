// @flow
import * as React from 'react'
import {Form, Field, FieldArray, Formik} from 'formik'
import {createComponent} from 'react-fela'
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

const renderAddressForm = (arrayHelpers, address, index) => {
  return (
    <div key={index}>
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
      <button
        type="button"
        onClick={() => arrayHelpers.remove(index)}
      >
        -
      </button>
    </div>
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
              <div>
                <div>Addresses</div>
                {values.addresses && values.addresses.length > 0 ? (
                  values.addresses.map((address, index) => (
                    renderAddressForm(arrayHelpers, address, index)
                  )))
                  : null
                }
                <button
                  type="button"
                  onClick={() => arrayHelpers.push(EMPTY_ADDRESS)}
                >
                  Add address
                </button>
              </div>
            )}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    />
  )
}

export default UserForm
