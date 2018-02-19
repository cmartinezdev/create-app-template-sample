import * as React from 'react';
import { Form, Field, reduxForm, InjectedFormProps } from 'redux-form';
import { translate, TranslationFunction } from 'react-i18next';

export interface LoginFormValues {
  user: string;
  pass: string;
}

interface Props {
  t: TranslationFunction;
  myVal: boolean;
}

const LoginForm: React.SFC<
  Props & InjectedFormProps<LoginFormValues, Props>
> = ({ t, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="user">User: </label>
      <Field name="user" component="input" type="text" required={true} />
    </div>
    <div>
      <label htmlFor="pass">Pass: </label>
      <Field name="pass" component="input" type="text" />
    </div>
    <button type="submit">{t('login')}</button>
  </Form>
);

export default reduxForm<LoginFormValues>({
  form: 'login',
})(translate()(LoginForm));
