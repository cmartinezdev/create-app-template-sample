import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';

import './Header.scss';
const logo = require('./logo.svg');

interface Props {
  t: TranslationFunction;
}

const Header: React.SFC<Props> = ({ t }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{t('welcome')}</h1>
  </header>
);

export default translate()(Header);
