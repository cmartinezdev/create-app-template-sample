import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'src/redux/modules/counter/counter.actions';
import * as selectors from 'src/redux/modules/counter/counter.selectors';

interface Props {
  t: TranslationFunction;
  count: number;
  increment: typeof actions.increment;
  decrement: typeof actions.decrement;
}

const CounterSync: React.SFC<Props> = ({ t, count, increment, decrement }) => (
  <div>
    <h1>{t('counterSync')}</h1>
    <h3>
      {t('value')}: {count}
    </h3>
    <p>
      <button onClick={() => increment(1)}>{t('increment')}</button>
      <button onClick={() => decrement(1)}>{t('decrement')}</button>
    </p>
  </div>
);

const mapStateToProps = (state: {}) => ({
  count: selectors.getCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(
    {
      increment: actions.increment,
      decrement: actions.decrement,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(CounterSync),
);
