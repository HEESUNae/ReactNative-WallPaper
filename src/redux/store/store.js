import { applyMiddleware, combineReducers, createStore } from 'redux';
import { favoriteReducer } from '../reducers/fevoriteReducer';

import logger from 'redux-logger';

const rootReducer = combineReducers({
  favorite: favoriteReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
