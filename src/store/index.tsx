import * as React from 'react';
import { Root } from "native-base";
import Router from '../shared/router';
import { applyMiddleware, compose, createStore, Store } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./effects";
import { AppState } from "./types";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = __DEV__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store: Store<AppState> = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

const AppWithStore = () => (
    <Root>
        <Provider store={store}>
            <Router />
        </Provider>
    </Root>
);

export default AppWithStore;