import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/index';
import sagas from './sagas/index';

// add the middlewares
const middlewares = [];

// Create a history of your choosing (we"re using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
middleware = routerMiddleware(history);

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

// create the store
const store = createStore(reducers, middleware);
sagaMiddleware.run(sagas);

// export
export { store, history };
