import {GlobalState, SocketStatus} from "../types";
import {ActionTypes, GlobalActions} from "../actions/global";

export const initialState: GlobalState = {
    error: null,
    socketConnection: SocketStatus.NOT_CONNECTED
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
                socketConnection: SocketStatus.CONNECTING
            };
        case ActionTypes.WEBSOCKET_CONNECTED:
            return {
                ...state,
                socketConnection: SocketStatus.CONNECTED
            };
        default:
            return state;
    }
};

export default globalReducer;