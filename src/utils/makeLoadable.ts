import * as Loadable from 'react-loadable';
import * as React from 'react';

import Loading from 'src/components/Loading';

const makeLoadable = (loader = {}) =>
  Loadable({
    loader: () => loader as Promise<React.ComponentType>,
    loading: Loading,
  });

export default makeLoadable;
