import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {Actions, ActionTypes as GlobalActions} from "../actions/global";
import {ActionTypes as ChatActions} from "../actions/conversations";
import * as Api from "./socket.api";
import {getToken} from "./auth";
import {SocketEvents} from "../../shared/constants";
import {createMessage, messageArrived} from "./conversations";

function* socketSagas() {
    yield takeLatest(GlobalActions.INIT_WEBSOCKET_CONNECTION, connectWebSocket);
}

export function* connectWebSocket() {
    try {
        const token = yield call(getToken);
        const socket = yield call(Api.initConnection, token);
        yield call(initListeners, socket);
    } catch (error) {
        console.log(error);
    }
}

export function* initListeners(socket) {
    const newMessageChannel = yield call(Api.createSocketChannel, socket, SocketEvents.SEND_MESSAGE);
    const userListChannel = yield call(Api.createSocketChannel, socket, SocketEvents.USER_LIST);
    yield takeEvery(newMessageChannel, messageArrived);
    yield takeEvery(userListChannel, () => {}, socket);
    yield takeEvery(ChatActions.INIT_CREATE_MESSAGE, createMessage, socket);
    yield put(Actions.websocketConnected());
}

export default socketSagas;