import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'src/state/modules/auth/auth.actions';
import * as selectors from 'src/state/modules/auth/auth.selectors';
import LoginForm, { LoginFormValues } from './components/LoginForm';

interface Props {
  t: TranslationFunction;
  authenticate: typeof actions.authenticate;
  isAuthenticating: boolean;
  hasError: boolean;
}

const Login: React.SFC<Props> = ({
  t,
  authenticate,
  isAuthenticating,
  hasError,
}) => (
  <div>
    <h1>{t('login')}</h1>
    <LoginForm
      onSubmit={({ user, pass }: LoginFormValues) => {
        authenticate(user, pass);
      }}
    />
    {hasError ? <p>{t('error')}</p> : ''}
  </div>
);

const mapStateToProps = (state: {}) => ({
  isAuthenticating: selectors.getIsAuthenticating(state),
  hasError: selectors.getIsError(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(
    {
      authenticate: actions.authenticate,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(translate()(Login));
