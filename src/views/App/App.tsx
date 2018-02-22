import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';

import ChangeLang from './components/ChangeLang';
import Header from './components/Header';
import RouteBasedHelmet from './components/RouteBasedHelmet';

import PrivateRoute from './components/PrivateRoute';

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
      <Route exact={true} path="/login" component={Login} />
      <PrivateRoute path="/" component={Home} />
    </Switch>
  </div>
);

export default translate()(App);
