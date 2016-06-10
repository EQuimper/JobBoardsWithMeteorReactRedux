import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from '../reducers';

const middleware = [
    reduxImmutableStateInvariant(),
    createLogger()
];

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create the store with the (reducer, initialState, compose)

const configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        enhancers
    );
};

export default configureStore;
