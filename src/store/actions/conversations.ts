import { ActionsUnion, createAction } from "../action-creator";
import {IConversation, IMessage, IPerson} from "../../shared/models";
import {ChatHistory} from "../types";

export enum ActionTypes {
    INIT_FETCH_CONVERSATIONS = 'INIT_FETCH_CONVERSATIONS',
    FETCH_CONVERSATIONS_SUCCESS = 'FETCH_CONVERSATIONS_SUCCESS',
    FETCH_CONVERSATIONS_FAILED = 'FETCH_CONVERSATIONS_FAILED',

    SELECT_TARGET = 'SELECT_TARGET',

    INIT_FETCH_MESSAGES = 'INIT_FETCH_MESSAGES',
    FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
    FETCH_MESSAGES_FAILED = 'FETCH_MESSAGES_FAILED',

    INIT_CREATE_MESSAGE = 'INIT_CREATE_MESSAGE',
    CREATE_MESSAGE_OPTRES = 'CREATE_MESSAGE_OPTRES',
    CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS',
    CREATE_MESSAGE_FAILED = 'CREATE_MESSAGE_FAILED',
    MESSAGE_ARRIVED = 'MESSAGE_ARRIVED'
}

export const Actions = {
    initFetchConversations: () => createAction(ActionTypes.INIT_FETCH_CONVERSATIONS),
    fetchConversationsSuccess: (conversations: IConversation[]) => createAction(
        ActionTypes.FETCH_CONVERSATIONS_SUCCESS, conversations
    ),
    fetchConversationsFailed: () => createAction(ActionTypes.FETCH_CONVERSATIONS_FAILED),

    selectTarget: (target: IPerson) => createAction(ActionTypes.SELECT_TARGET, target),

    initFetchMessages: (targetId: string) => createAction(ActionTypes.INIT_FETCH_MESSAGES, targetId),
    fetchMessagesSuccess: (messages: ChatHistory) => createAction(ActionTypes.FETCH_MESSAGES_SUCCESS, messages),
    fetchMessagesFailed: () => createAction(ActionTypes.FETCH_MESSAGES_FAILED),

    initCreateMessage: (message: IMessage) => createAction(ActionTypes.INIT_CREATE_MESSAGE, message),
    createMessageOptRes: (message: IMessage) => createAction(ActionTypes.CREATE_MESSAGE_OPTRES, message),
    createMessageSuccess: (message: IMessage, optResId: string) => createAction(
        ActionTypes.CREATE_MESSAGE_SUCCESS, { message, optResId }
    ),
    createMessageFailed: (rollback: IMessage) => createAction(ActionTypes.CREATE_MESSAGE_FAILED, rollback),
    messageArrived: (message: IMessage) => createAction(ActionTypes.MESSAGE_ARRIVED, message)
};

export type ConversationActions = ActionsUnion<typeof Actions>;