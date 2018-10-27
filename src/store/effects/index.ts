import { all } from "redux-saga/effects";
import eventSagas from "./events";
import peopleSagas from "./people";
import conversationSagas from "./conversations";
import {authSagas} from "./auth";
import socketSagas from "./websocket";

function* rootSaga() {
    yield all([
        authSagas(),
        socketSagas(),
        peopleSagas(),
        conversationSagas(),
        eventSagas()
    ]);
}

export default rootSaga;