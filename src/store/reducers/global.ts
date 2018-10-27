import {GlobalState} from "../types";
import { GlobalActions, ActionTypes } from "../actions/global";

export const initialState: GlobalState = {
    error: null,
    socketConnecting: false,
    socketConnected: false
};

const globalReducer = (state = initialState, action: GlobalActions) => {
    switch (action.type) {
        case ActionTypes.SHOW_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case ActionTypes.CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        case ActionTypes.INIT_WEBSOCKET_CONNECTION:
            return {
                ...state,
                socketConnecting: true
            };
        case ActionTypes.WEBSOCKET_CONNECTED:
            return {
                ...state,
                socketConnecting: false,
                socketConnected: true
            };
        default:
            return state;
    }
};

export default globalReducer;