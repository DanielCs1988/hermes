import { all } from "redux-saga/effects";
import eventSagas from "./events";
import peopleSagas from "./people";
import conversationSagas from "./conversations";

function* rootSaga() {
    yield all([
        peopleSagas(),
        conversationSagas(),
        eventSagas()
    ]);
}

export default rootSaga;