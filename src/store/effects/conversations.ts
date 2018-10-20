import {IConversation, IMessage} from "../../shared/models";
import {getCurrentUser, getPerson} from "../reducers/people";
import {put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {Actions, ActionTypes} from "../actions/conversations";
import {Actions as GlobalActions} from "../actions/global";
import {ChatHistory} from "../types";

const conversations: IConversation[] = [
    {
        // @ts-ignore
        target: 'asd',
        lastMessage: {
            createdAt: 1539956059954,
            id: 'msg01',
            to: 'someone',
            from: 'else',
            content: 'Oh hai there'
        }
    },
    {
        // @ts-ignore
        target: 'qrt',
        lastMessage: {
            createdAt: 1539955059954,
            id: 'msg02',
            to: 'else',
            from: 'someone',
            content: 'This is ye other message!'
        }
    },
];

const messages: ChatHistory = {
    'asd': [
        {
            id: 'smh',
            content: 'Hey there',
            from: 'asd',
            to: 'qrt',
            createdAt: 1539462943914
        },
        {
            id: 'smhelse',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            from: 'qrt',
            to: 'asd',
            createdAt: 1539462944914
        },
        {
            id: 'smhelsest',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            from: 'asd',
            to: 'qrt',
            createdAt: 1539462945914
        },
        {
            id: 'smhelsestest',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            from: 'qrt',
            to: 'asd',
            createdAt: 1539462946914
        }
    ]
};

function* conversationSagas() {
    yield takeLatest(ActionTypes.INIT_FETCH_CONVERSATIONS, fetchConversations);
    yield takeEvery(ActionTypes.INIT_FETCH_MESSAGES, fetchMessages);
    yield takeEvery(ActionTypes.INIT_CREATE_MESSAGE, createMessage);
}

export function* fetchConversations() {
    const people = {
        'asd': yield select(getPerson('asd')),
        'qrt': yield select(getPerson('qrt'))
    };
    try {
        yield put(Actions.fetchConversationsSuccess(conversations.map(convo => {
            return {
                ...convo,
                // @ts-ignore
                target: people[convo.target]
            };
        })));
    } catch (e) {
        yield put(Actions.fetchConversationsFailed());
        yield put(GlobalActions.showError('Could not fetch conversations!'));
    }
}

export function* fetchMessages(action) {
    const targetId = action.payload;
    console.log(targetId);
    try {
        yield put(Actions.fetchMessagesSuccess(messages));
    } catch (e) {
        yield put(Actions.fetchMessagesFailed());
        yield put(GlobalActions.showError('Could not retrieve messages!'));
    }
}

export function* createMessage(action) {
    const currentUser = yield select(getCurrentUser);
    const message: IMessage = {
        ...action.payload,
        id: '',  // TODO: use random ID generator
        from: currentUser.id,
        createdAt: new Date().getTime()
    };
    try {
        yield put(Actions.createMessageOptRes(message));
    } catch (e) {
        yield put(Actions.createMessageFailed(message));
        yield put(GlobalActions.showError('Could not save message!'));
    }
}

export default conversationSagas;