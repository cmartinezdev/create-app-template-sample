import * as React from 'react';
import { translate, TranslationFunction, Trans } from 'react-i18next';

interface Props {
  t: TranslationFunction;
}
const Loading: React.SFC<Props> = ({ t }) => <div>{t('loading')}...</div>;

export default translate()(Loading);
