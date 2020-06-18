import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';

import rootReducer from '../reducers';

const middlewareList = [createLogger()];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewareList)),
);

export default store;
