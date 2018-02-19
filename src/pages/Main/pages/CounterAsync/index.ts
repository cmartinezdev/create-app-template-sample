import * as Loadable from 'react-loadable';

import Loading from 'src/components/shared/Loading';

// export { default } from './CounterAsync';

export default Loadable({
  loader: () =>
    import(/* webpackChunkName: "counter_async" */ './CounterAsync'),
  loading: Loading, // Puede dar error si no está correctamente tipado
  delay: 200,
  timeout: 3000,
});
