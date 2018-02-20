import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { Switch } from 'react-router';

import Main from 'src/pages/Main';
import Login from 'src/pages/Login';

import ChangeLang from './ChangeLang';
import Header from 'src/components/core/App/Header';
import RouteBasedHelmet from './RouteBasedHelmet';
import AuthRoute, { showIfOptions } from './AuthRoute';

import './App.scss';

interface Props {
  t: TranslationFunction;
}

const App: React.SFC<Props> = ({ t }) => (
  <div className="App">
    <RouteBasedHelmet />

    <Header />

    <ChangeLang />

    <Switch>
      <AuthRoute
        exact={true}
        path="/login"
        component={Login}
        showIf={showIfOptions.unauthenticated}
        redirectTo="/"
      />
      <AuthRoute
        path="/"
        component={Main}
        showIf={showIfOptions.authenticated}
        redirectTo="/login"
      />
    </Switch>
  </div>
);

export default translate()(App);
