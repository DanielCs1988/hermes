import {ActionTypes, AuthActions} from "../actions/auth";
import {AuthState} from "../types";

export const initialState: AuthState = {
    token: null,
    expiresAt: null
};

const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case ActionTypes.AUTH_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default authReducer;