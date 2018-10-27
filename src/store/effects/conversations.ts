import {IMessage} from "../../shared/models";
import {getCurrentUser, getPeople} from "../reducers/people";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {Actions, ActionTypes} from "../actions/conversations";
import {Actions as GlobalActions} from "../actions/global";
import {IdGenerator} from "../../shared/utils";
import * as Api from "./conversations.api";
import {getToken} from "./auth";

function* conversationSagas() {
    yield takeLatest(ActionTypes.INIT_FETCH_CONVERSATIONS, fetchConversations);
    yield takeEvery(ActionTypes.INIT_FETCH_MESSAGES, fetchMessages);
}

export function* fetchConversations() {
    try {
        const token = yield call(getToken);
        const conversations = yield call(Api.fetchConversations, token);
        const people = yield select(getPeople);
        yield put(Actions.fetchConversationsSuccess(
            conversations.map(conversation => ({
                ...conversation,
                target: people[conversation.target]
            }))
        ));
    } catch (e) {
        yield put(Actions.fetchConversationsFailed());
        yield put(GlobalActions.showError('Could not fetch conversations!'));
    }
}

export function* fetchMessages(action) {
    const targetId = action.payload;
    try {
        const token = yield call(getToken);
        const messages = yield call(Api.fetchMessages, targetId, token);
        yield put(Actions.fetchMessagesSuccess({
            [targetId]: messages
        }));
    } catch (e) {
        yield put(Actions.fetchMessagesFailed());
        yield put(GlobalActions.showError('Could not retrieve messages!'));
    }
}

export function* createMessage(socket, action) {
    const currentUser = yield select(getCurrentUser);
    const optRes: IMessage = {
        ...action.payload,
        id: IdGenerator.generate(),
        createdAt: new Date().getTime(),
        from: currentUser.id
    };
    try {
        yield put(Actions.createMessageOptRes(optRes));
        const message = yield call(Api.sendMessage, optRes, socket);
        yield put(Actions.createMessageSuccess(message, optRes.id));
    } catch (e) {
        yield put(Actions.createMessageFailed(optRes));
        yield put(GlobalActions.showError('Could not save message!'));
    }
}

export function* messageArrived(message: IMessage) {
    yield put(Actions.messageArrived(message));
}

export default conversationSagas;