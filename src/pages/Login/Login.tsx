import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import * as actions from 'src/state/modules/auth/auth.actions';
import * as selectors from 'src/state/modules/auth/auth.selectors';
import LoginForm, { LoginFormValues } from './components/LoginForm';

interface Props {
  t: TranslationFunction;
  authenticate: typeof actions.authenticate;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  hasError: boolean;
}

const Login: React.SFC<Props> = ({
  t,
  authenticate,
  isAuthenticating,
  isAuthenticated,
  hasError,
}) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
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
};

const mapStateToProps = (state: {}) => ({
  isAuthenticating: selectors.getIsAuthenticating(state),
  isAuthenticated: selectors.isAuthenticated(state),
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
