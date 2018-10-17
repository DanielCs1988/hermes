import { combineReducers } from "redux";
import peopleReducer from "./people";
import eventReducer from "./events";
import conversationReducer from "./conversations";
import authReducer from "./auth";

const rootReducer = combineReducers({
    people: peopleReducer,
    conversations: conversationReducer,
    events: eventReducer,
    auth: authReducer
});

export default rootReducer;