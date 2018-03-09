// @flow
import * as React from 'react'
import {Field, Form, Formik} from 'formik'
import {createComponentWithProxy} from 'react-fela'
import yup from 'yup'

const MyInputField1 = createComponentWithProxy(() => ({
  backgroundColor: 'yellow',
}), 'input')

const MyInputField2 = createComponentWithProxy(() => ({
  backgroundColor: 'orange',
}), 'input')

// const validate = (values) => {
//   const errors = {}
//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address'
//   }
//   return errors
// }

const validationSchema = () => {
  return yup.object().shape({
    firstName: yup.string().required(),
    email: yup.string().required('E-mail is required!!!'),
  })
}

/*
 * see https://hackernoon.com/painless-react-forms-with-formik-e61b70473c60
 * see https://keyholesoftware.com/2017/10/23/the-joy-of-forms-with-react-and-formik/
 * see https://github.com/jaredpalmer/formik/issues/33
 * see https://github.com/jaredpalmer/formik/issues/11
 * see https://github.com/jaredpalmer/formik/commit/45cd9c71cdff4497a3b61a5ea05c7a679453fad5
 */
const SimpleForm = () => {
  return (
    <Formik
      displayName="SimpleForm"
      onSubmit={(values) => console.log(values)}
      initialValues={{firstName: '', lastName: '', email: ''}}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}
      render={({handleChange, handleBlur, values, errors}) => (
        <Form>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          <br />
          <Field
            name="lastName"
            render={({field}) => (
              <MyInputField1 {...field} placeholder="firstName" />
            )}
          />
          <br />
          <Field
            name="email"
            render={({field}) => (
              <div>
                <MyInputField2
                  {...field}
                  placeholder="E-Mail"
                />
                {errors.email}
              </div>
            )}
          />
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    />
  )
}

export default SimpleForm
