import * as React from 'react';
import { translate } from 'react-i18next';
import { i18n as I18n } from 'i18next';

import './ChangeLang.scss';

interface Props {
  i18n: I18n;
}

const ChangeLang: React.SFC<Props> = ({ i18n }) => (
  <div className="ChangeLang">
    <button onClick={() => i18n.changeLanguage('es')}>es</button>
    <button onClick={() => i18n.changeLanguage('en')}>en</button>
  </div>
);

export default translate()(ChangeLang);
