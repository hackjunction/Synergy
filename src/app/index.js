import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App';
import { history, store } from './store';

import './stylesheets/main.scss';
import './stylesheets/media_queries.scss';

const target = document.querySelector('#app');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
