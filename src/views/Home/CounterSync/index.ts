import * as Loadable from 'react-loadable';

import Loading from 'src/components/Loading';

// export { default } from './CounterSync';

export default Loadable({
  loader: () => import(/* webpackChunkName: "counter_sync" */ './CounterSync'),
  loading: Loading,
  delay: 200,
  timeout: 3000,
});
