import {AuthActions} from "../actions/auth";
import {AuthState} from "../types";

const initialState: AuthState = {
    token: null,
    expiresIn: null,
    loading: false,
    error: null
};

const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default authReducer;