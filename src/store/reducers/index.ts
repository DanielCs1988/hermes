import { combineReducers } from "redux";
import peopleReducer from "./people";
import eventReducer from "./events";
import conversationReducer from "./conversations";
import authReducer from "./auth";
import globalReducer from "./global";

const rootReducer = combineReducers({
    global: globalReducer,
    people: peopleReducer,
    conversations: conversationReducer,
    events: eventReducer,
    auth: authReducer
});

export default rootReducer;