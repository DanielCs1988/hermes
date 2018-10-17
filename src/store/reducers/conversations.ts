import {ConversationActions} from "../actions/conversations";
import {ConversationState} from "../types";

const initialState: ConversationState = {
    conversations: [],
    messages: {},
    loading: false,
    error: null,
    fetched: false
};

const conversationReducer = (state = initialState, action: ConversationActions): ConversationState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default conversationReducer;