import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import * as selectors from 'src/redux/modules/auth/auth.selectors';

interface Props extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: React.SFC<Props> = ({ isAuthenticated, ...props }) =>
  isAuthenticated ? <Route {...props} /> : <Redirect to="/login" />;

const mapStateToProps = (state: {}) => ({
  isAuthenticated: selectors.isAuthenticated(state),
});

export default connect(mapStateToProps, {})(PrivateRoute);
