import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {css} from '@emotion/core'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const ValidationSchemaExample = () => (
  <div css={one}>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
        <div className="field">
        <label class="label">Name</label>
          <Field name="firstName" className={errors.firstName ? "input is-danger" : "input"} />
          {errors.firstName && touched.firstName ? (
            <p className="help is-danger">{errors.firstName}</p>
          ) : null}
          </div>
          <div className="field">
          <label class="label">Phone Number</label>
          <Field name="lastName" className={errors.lastName ? "input is-danger" : "input"}/>
          {errors.lastName && touched.lastName ? (
            <p className="help is-danger">{errors.lastName}</p>
          ) : null}
          </div>
          <div class="field">
          <label class="label">Email</label>
          <Field name="email" type="email" className={errors.email ? "input is-danger" : "input"}/>
          {errors.email && touched.email ? <p className="help is-danger">{errors.email}</p> : null}
          </div>
          <button type="submit" className="button is-link">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample;

const one= css`
 box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.2);
 padding: 10px;
`