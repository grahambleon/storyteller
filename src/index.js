import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
