// @flow
import * as React from 'react'
import {Form, Formik} from 'formik'
import {Box} from 'indoqa-react-fela'
import yup from 'yup'

import FormRow from './FormRow'
import AddressesForm from './AddressesForm.react'

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
            <AddressesForm values={values} errors={errors} touched={touched} />
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
