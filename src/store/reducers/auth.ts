import {AuthActions} from "../actions/auth";
import {AuthState} from "../types";

export const initialState: AuthState = {
    token: null,
    expiresIn: null,
    loading: false
};

const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default authReducer;