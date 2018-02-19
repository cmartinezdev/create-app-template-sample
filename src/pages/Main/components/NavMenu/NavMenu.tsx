import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { translate, TranslationFunction } from 'react-i18next';

import './NavMenu.scss';

interface Props {
  t: TranslationFunction;
}

const NavMenu: React.SFC<Props> = ({ t }) => (
  <div>
    <NavLink className="margin" activeClassName="selected" to="/counter_sync">
      {t('counterSync')}
    </NavLink>
    <NavLink className="margin" activeClassName="selected" to="/counter_async">
      {t('counterAsync')}
    </NavLink>
  </div>
);

export default translate()(NavMenu);
