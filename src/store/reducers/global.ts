import {GlobalState} from "../types";
import { GlobalActions, ActionTypes } from "../actions/global";

export const initialState: GlobalState = {
    error: null
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
        default:
            return state;
    }
};

export default globalReducer;