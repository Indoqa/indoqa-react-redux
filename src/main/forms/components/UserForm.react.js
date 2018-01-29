// @flow
import * as React from 'react'
import {Form, Formik} from 'formik'
import {Box} from 'indoqa-react-fela'
import yup from 'yup'
import {Link} from 'react-router-dom'

import FormRow from './FormRow.react'
import AddressesForm from './AddressesForm.react'
import ButtonLink from '../../commons/components/atoms/ButtonLink.react'

import type {User} from '../types/User'

type Props = {
  user: User,
  onSubmit: Function,
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

const UserForm = ({user, onSubmit}:Props) => {
  return (
    <Formik
      key={user.id + user.lastModified.toString()}
      displayName="UserForm"
      onSubmit={(values, {setErrors}) => onSubmit(values, setErrors)}
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
              <ButtonLink>
                <Link to="/forms">Cancel</Link>
              </ButtonLink>
              <button type="submit">Save</button>
            </Box>
          </Form>
        )
      }}
    />
  )
}

export default UserForm
