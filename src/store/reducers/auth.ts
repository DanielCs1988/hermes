import {ActionTypes, AuthActions} from "../actions/auth";
import {AuthState} from "../types";

export const initialState: AuthState = {
    token: null,
    expiresAt: null
};

const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case ActionTypes.AUTHENTICATE:
            return {
                ...state,
                ...action.payload
            };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                token: null,
                expiresAt: null
            };
        default:
            return state;
    }
};

export default authReducer;