import * as Loadable from 'react-loadable';

import Loading from 'src/components/Loading';

// export { default } from './CounterAsync';

export default Loadable({
  loader: () =>
    import(/* webpackChunkName: "counter_async" */ './CounterAsync'),
  loading: Loading,
  delay: 200,
  timeout: 3000,
});
