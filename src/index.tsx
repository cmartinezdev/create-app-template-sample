import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Root from 'src/components/core/Root';

const mountPoint = document.getElementById('root') as HTMLElement;

ReactDOM.render(<Root />, mountPoint);
registerServiceWorker();
