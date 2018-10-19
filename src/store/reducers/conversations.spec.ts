import reducer, { initialState } from "./conversations";
import { Actions, ConversationActions } from "../actions/conversations";
import { ConversationState } from "../types";
import {conversations, history1, history2, newMessage} from "./seed";

describe('Conversation Reducer', () => {

    let defaultState: ConversationState;

    beforeEach(() => {
        defaultState = {
            ...initialState
        };
    });

    it('should return default state on invalid action', () => {
        expect(reducer(defaultState, {} as ConversationActions)).toEqual(defaultState);
    });

    describe('when conversations arrive from the server', () => {
        const action = Actions.fetchConversationsSuccess(conversations);

        it('should save the messages', () => {
            expect(reducer(defaultState, action).conversations).toEqual(conversations);
        });

        it('should cancel loading', () => {
            expect(reducer({
                ...defaultState, loading: true
            }, action).loading).toBe(false);
        });

        it('should set fetched to true', () => {
            expect(reducer(defaultState, action).fetched).toBe(true);
        });

        it('should not touch message history', () => {
            expect(reducer(defaultState, action).messages).toEqual({});
        });
    });

    describe('when fetching conversations fail', () => {
        const action = Actions.fetchConversationsFailed();

        it('should cancel loading', () => {
            expect(reducer({
                ...defaultState, loading: true
            }, action)).toEqual(defaultState);
        });
    });

    describe('when fetching a message history is successful', () => {
        const action = Actions.fetchMessagesSuccess(history2);

        it('should add the new messages', () => {
            expect(reducer({
                ...defaultState, messages: { ...history1 }
            }, action)).toEqual({
                ...defaultState, messages: {
                    ...history1,
                    ...history2
                }
            })
        });

        it('should cancel loading', () => {
            expect(reducer({
                ...defaultState, loading: true
            }, action).loading).toBe(false);
        });
    });

    describe('when fetching a message history fails', () => {
        const action = Actions.fetchMessagesFailed();

        it('should cancel loading', () => {
            expect(reducer({
                ...defaultState, loading: true
            }, action)).toEqual(defaultState);
        });
    });

    describe('when a message optimistic response is added', () => {
        const action = Actions.createMessageOptRes(newMessage);

        it('should add it to the correct target history\'s end', () => {
            expect(reducer({
                ...defaultState, messages: { ...history2 }
            }, action)).toEqual({
                ...defaultState, messages: {
                    'p01': [
                        ...history2['p01'],
                        newMessage
                    ]
                }
            })
        });
    });

    describe('when a new message arrives from the server', () => {
        const optRes = { ...newMessage, id: 'temp', createdAt: 123 };
        const action = Actions.createMessageSuccess(newMessage, optRes.id);

        it('should overwrite the optimistic response', () => {
            expect(reducer({
                ...defaultState, messages: {
                    'p01': [ ...history2['p01'], optRes ]
                }
            }, action)).toEqual({
                ...defaultState, messages: {
                    'p01': [ ...history2['p01'], newMessage ]
                }
            });
        });
    });

    describe('when creating a new message is rejected by the server', () => {
        const action = Actions.createMessageFailed(newMessage);

        it('should remove the optimistic response', () => {
            expect(reducer({
                ...defaultState, messages: {
                    'p01': [ ...history2['p01'], newMessage ]
                }
            }, action)).toEqual({
                ...defaultState, messages: { ...history2 }
            })
        });
    });
});