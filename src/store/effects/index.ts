import { all } from "redux-saga/effects";
import {eventSagas} from "./events";

function* rootSaga() {
    yield all([
        eventSagas()
    ]);
}

export default rootSaga;