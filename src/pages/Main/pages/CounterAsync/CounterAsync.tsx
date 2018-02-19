import * as React from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'src/state/modules/counter/counter.actions';
import * as selectors from 'src/state/modules/counter/counter.selectors';

interface Props {
  t: TranslationFunction;
  count: number;
  isIncrementing: boolean;
  isDecrementing: boolean;
  incrementAsync: typeof actions.incrementAsync;
  decrementAsync: typeof actions.decrementAsync;
}

const CounterSync: React.SFC<Props> = ({
  t,
  count,
  isIncrementing,
  isDecrementing,
  incrementAsync,
  decrementAsync,
}) => (
  <div>
    <h1>{t('counterAsync')}</h1>
    <h3>
      {t('value')}: {count}
    </h3>
    <p>
      <button
        onClick={() => incrementAsync(1)}
        disabled={isIncrementing || isDecrementing}
      >
        {t('increment')}
      </button>
      <button
        onClick={() => decrementAsync(1)}
        disabled={isIncrementing || isDecrementing}
      >
        {t('decrement')}
      </button>
    </p>
  </div>
);

const mapStateToProps = (state: {}) => ({
  count: selectors.getCount(state),
  isIncrementing: selectors.getIsIncrementing(state),
  isDecrementing: selectors.getIsDecrementing(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(
    {
      incrementAsync: actions.incrementAsync,
      decrementAsync: actions.decrementAsync,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(CounterSync),
);
