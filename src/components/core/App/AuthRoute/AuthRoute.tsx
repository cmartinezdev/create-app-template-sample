import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import * as selectors from 'src/state/modules/auth/auth.selectors';

export enum showIfOptions {
  authenticated,
  unauthenticated,
}

interface Props extends RouteProps {
  isAuthenticated: boolean;
  showIf: showIfOptions;
  redirectTo: string;
}

const AuthRoute: React.SFC<Props> = ({
  isAuthenticated,
  showIf,
  redirectTo,
  ...props
}) => {
  if (
    (isAuthenticated && showIf === showIfOptions.unauthenticated) ||
    (!isAuthenticated && showIf === showIfOptions.authenticated)
  ) {
    return <Redirect to={redirectTo} />;
  }

  return <Route {...props} />;
};

const mapStateToProps = (state: {}) => ({
  isAuthenticated: selectors.isAuthenticated(state),
});

export default connect(mapStateToProps, {})(AuthRoute);
