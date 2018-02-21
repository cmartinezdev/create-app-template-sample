import * as React from 'react';
import { connect } from 'react-redux';
import { translate, TranslationFunction } from 'react-i18next';
import { Helmet } from 'react-helmet';

import * as selectors from 'src/redux/modules/router/router.selectors';
import mappings from './HelmetMappings';

interface Props {
  t: TranslationFunction;
  route: string;
}

const RouteBasedHelmet: React.SFC<Props> = ({ t, route }) => (
  <Helmet>
    <title>{t(mappings[route].title_key)}</title>
  </Helmet>
);

const mapStateToProps = (state: {}) => ({
  route: selectors.getLocation(state),
});

export default connect(mapStateToProps)(translate()(RouteBasedHelmet));
