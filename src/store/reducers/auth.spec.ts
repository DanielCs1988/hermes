import reducer, { initialState } from "./auth";
import { AuthActions } from "../actions/auth";
import { AuthState } from "../types";

describe('Auth Reducer', () => {

    let defaultState: AuthState;

    beforeEach(() => {
        defaultState = {
            ...initialState
        };
    });

    it('should return default state on invalid action', () => {
        expect(reducer(defaultState, {} as AuthActions)).toEqual(defaultState);
    });
});