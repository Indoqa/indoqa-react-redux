// @flow
import * as React from 'react'
import {Form, Field, Formik} from 'formik'
import {createComponent} from 'react-fela'
import yup from 'yup'

const UserLabel = createComponent(() => ({
  display: 'block',
  width: '300',
}), 'label')

const validationSchema = () => {
  return yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required('E-mail is required!!!'),
  })
}

const user = {
  id: '',
  name: 'Maier',
  email: 'w.maier@example.com',
  addresses: [
    {
      addressLine: 'Schottenring 3',
      city: 'Vienna',
      zipCode: '1010',
      country: 'Austria',
    },
    {
      addressLine: 'Heinrichstrasse 7',
      city: 'Graz',
      zipCode: '8010',
      country: 'Austria',
    }
  ],
}

const UserForm = () => {
  return (
    <Formik
      displayName="UserForm"
      onSubmit={(values) => console.log(values)}
      initialValues={user}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}
      render={() => (
        <Form>
          <div>
            <UserLabel>Name</UserLabel>
            <Field
              name="name"
              render={({field}) => (
                <input {...field} />
              )}
            />
          </div>
          <br />
          <div>
            <UserLabel>E-Mail</UserLabel>
            <Field
              name="email"
              render={({field}) => (
                <input {...field} />
              )}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    />
  )
}

export default UserForm
