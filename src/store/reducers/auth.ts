import {ActionTypes, AuthActions} from "../actions/auth";
import {AppState, AuthState} from "../types";

export const initialState: AuthState = {
    token: null,
    expiresAt: null,
    authenticated: false
};

const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case ActionTypes.SAVE_CREDENTIALS:
            return {
                ...state,
                ...action.payload
            };
        case ActionTypes.LOGIN:
            return {
                ...state,
                authenticated: true
            };
        case ActionTypes.LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export const getCredentials = ({ auth: { token, expiresAt } }: AppState) => ({ token, expiresAt });

export default authReducer;