import {ActionTypes, ConversationActions} from "../actions/conversations";
import {ConversationState} from "../types";

const initialState: ConversationState = {
    conversations: [],
    messages: {},
    loading: false,
    fetched: false
};

const conversationReducer = (state = initialState, action: ConversationActions): ConversationState => {
    switch (action.type) {
        case ActionTypes.FETCH_CONVERSATIONS_SUCCESS:
            return {
                ...state,
                fetched: true,
                loading: false,
                conversations: action.payload
            };
        case ActionTypes.FETCH_CONVERSATIONS_FAILED:
            return {
                ...state,
                loading: false
            };
        case ActionTypes.FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: {
                    ...state.messages,
                    ...action.payload
                }
            };
        case ActionTypes.FETCH_MESSAGES_FAILED:
            return {
                ...state,
                loading: false
            };
        case ActionTypes.CREATE_MESSAGE_SUCCESS:
            // TODO: messages arriving on the channel should have their swapped: from is the target
            const target = action.payload.to;
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [target]: [ ...state.messages[target], action.payload ]
                }
            };
        case ActionTypes.CREATE_MESSAGE_FAILED:
            const rbTarget = action.payload.to;
            const rbId = action.payload.id;
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [rbTarget]: state.messages[rbTarget].filter(msg => msg.id !== rbId)
                }
            };
        default:
            return state;
    }
};

export default conversationReducer;