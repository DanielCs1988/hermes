import { all } from "redux-saga/effects";
import eventSagas from "./events";
import peopleSagas from "./people";
import conversationSagas from "./conversations";
import {authSagas} from "./auth";

function* rootSaga() {
    yield all([
        authSagas(),
        peopleSagas(),
        conversationSagas(),
        eventSagas()
    ]);
}

export default rootSaga;