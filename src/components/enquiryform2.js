import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {css} from '@emotion/core';
import TitleComponent from '../components/title';

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
  <div style={{textAlign:"center"}}>
  <TitleComponent title="Whant to book an apointment?"/>
  </div>
  <br/>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message:'',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form css={form}>
        <div className="field">
        <label class="label">Name</label>
          <Field name="firstName" className={errors.firstName ? "input is-danger" : "input"} />
          </div>
          <div className="field">
          <label class="label">Phone Number</label>
          <Field name="lastName" className={errors.lastName ? "input is-danger" : "input"}/>
         
          </div>
          <div class="field">
          <label class="label">Email</label>
          <Field name="email" type="email" className={errors.email ? "input is-danger" : "input"}/>
          </div>
          <div class="field">
          <label class="label">Your Message</label>
          <Field name="message" type="email" className={errors.message ? "input is-danger" : "input"}/>
          </div>

          <div> <br/><button type="submit" className="button is-link">Submit</button></div>
         
        </Form>
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample;

const one= css`
 box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.2);
 padding: 20px;
 border-radius: 5px;
 margin: 7px 3px;
`

const form = css`
 display: flex;
 justify-content: space-around;
 margin-bottom: 0px;
`