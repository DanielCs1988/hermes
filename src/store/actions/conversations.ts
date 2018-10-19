import { ActionsUnion, createAction } from "../action-creator";
import {IConversation, IMessage} from "../../shared/models";
import {ChatHistory} from "../types";

export enum ActionTypes {
    FETCH_CONVERSATIONS_SUCCESS = 'FETCH_CONVERSATIONS_SUCCESS',
    FETCH_CONVERSATIONS_FAILED = 'FETCH_CONVERSATIONS_FAILED',
    FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
    FETCH_MESSAGES_FAILED = 'FETCH_MESSAGES_FAILED',
    CREATE_MESSAGE_OPTRES = 'CREATE_MESSAGE_OPTRES',
    CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS',
    CREATE_MESSAGE_FAILED = 'CREATE_MESSAGE_FAILED'
}

export const Actions = {
    fetchConversationsSuccess: (conversations: IConversation[]) => createAction(
        ActionTypes.FETCH_CONVERSATIONS_SUCCESS, conversations
    ),
    fetchConversationsFailed: () => createAction(ActionTypes.FETCH_CONVERSATIONS_FAILED),
    fetchMessagesSuccess: (messages: ChatHistory) => createAction(ActionTypes.FETCH_MESSAGES_SUCCESS, messages),
    fetchMessagesFailed: () => createAction(ActionTypes.FETCH_MESSAGES_FAILED),
    createMessageOptRes: (message: IMessage) => createAction(ActionTypes.CREATE_MESSAGE_OPTRES, message),
    createMessageSuccess: (message: IMessage, optResId: string) => createAction(
        ActionTypes.CREATE_MESSAGE_SUCCESS, { message, optResId }
    ),
    createMessageFailed: (rollback: IMessage) => createAction(ActionTypes.CREATE_MESSAGE_FAILED, rollback)
};

export type ConversationActions = ActionsUnion<typeof Actions>;