import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import Main from 'src/pages/Main';
import Login from 'src/pages/Login';

import ChangeLang from './ChangeLang';
import Header from 'src/components/core/App/Header';
import RouteBasedHelmet from './RouteBasedHelmet';

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
      <Route path="/" component={Main} />
    </Switch>
  </div>
);

export default translate()(App);
