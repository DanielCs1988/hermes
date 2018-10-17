import { ActionsUnion, createAction } from "../action-creator";
import {Conversation} from "../../shared/models";
import {ChatHistory} from "../types";

export enum ActionTypes {
    FETCH_CONVERSATIONS_SUCCESS = 'FETCH_CONVERSATIONS_SUCCESS',
    FETCH_CONVERSATIONS_FAILED = 'FETCH_CONVERSATIONS_FAILED',
    FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
    FETCH_MESSAGES_FAILED = 'FETCH_MESSAGES_FAILED'
}

export const Actions = {
    fetchConversationsSuccess: (conversations: Conversation[]) => createAction(
        ActionTypes.FETCH_CONVERSATIONS_SUCCESS, conversations
    ),
    fetchConversationsFailed: (reason: string) => createAction(ActionTypes.FETCH_CONVERSATIONS_FAILED, reason),
    fetchMessagesSuccess: (messages: ChatHistory) => createAction(ActionTypes.FETCH_MESSAGES_SUCCESS, messages),
    fetchMessagesFailed: (reason: string) => createAction(ActionTypes.FETCH_MESSAGES_FAILED, reason)
};

export type ConversationActions = ActionsUnion<typeof Actions>;