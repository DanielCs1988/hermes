import { ActionsUnion, createAction } from "../action-creator";
import {IConversation, IMessage} from "../../shared/models";
import {ChatHistory, RollbackError} from "../types";

export enum ActionTypes {
    FETCH_CONVERSATIONS_SUCCESS = 'FETCH_CONVERSATIONS_SUCCESS',
    FETCH_CONVERSATIONS_FAILED = 'FETCH_CONVERSATIONS_FAILED',
    FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
    FETCH_MESSAGES_FAILED = 'FETCH_MESSAGES_FAILED',
    CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS',
    CREATE_MESSAGE_FAILED = 'CREATE_MESSAGE_FAILED'
}

export const Actions = {
    fetchConversationsSuccess: (conversations: IConversation[]) => createAction(
        ActionTypes.FETCH_CONVERSATIONS_SUCCESS, conversations
    ),
    fetchConversationsFailed: (reason: string) => createAction(ActionTypes.FETCH_CONVERSATIONS_FAILED, reason),
    fetchMessagesSuccess: (messages: ChatHistory) => createAction(ActionTypes.FETCH_MESSAGES_SUCCESS, messages),
    fetchMessagesFailed: (reason: string) => createAction(ActionTypes.FETCH_MESSAGES_FAILED, reason),
    createMessageSuccess: (message: IMessage) => createAction(ActionTypes.CREATE_MESSAGE_SUCCESS, message),
    createMessageFailed: (rollback: RollbackError<IMessage>) => createAction(ActionTypes.CREATE_MESSAGE_FAILED, rollback)
};

export type ConversationActions = ActionsUnion<typeof Actions>;