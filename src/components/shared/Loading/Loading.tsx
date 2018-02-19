import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';

interface Props {
  t: TranslationFunction;
  error: Boolean;
  pastDelay: Boolean;
  timedOut: Boolean;
}
const Loading: React.SFC<Props> = ({ t, error, pastDelay, timedOut }) => {
  if (error) {
    return <div>Error!</div>;
  } else if (timedOut) {
    return <div>{t('toMuchTime')}...</div>;
  } else if (pastDelay) {
    return <div>{t('loading')}...</div>;
  } else {
    return null;
  }
};

export default translate()(Loading);
