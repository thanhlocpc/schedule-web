import { createStore, compose, applyMiddleware } from 'redux';

import IndexReducer from './reducers';
// import IndexSagas from './sagas';

const store = createStore(IndexReducer);


// sagaMiddleware.run(IndexSagas);

export default store;