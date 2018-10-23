import reducer, { initialState } from "./auth";
import {Actions, AuthActions} from "../actions/auth";
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

    describe('when authenticating', () => {
        const action = Actions.saveCredentials({
            token: 'tokken',
            expiresAt: 123
        });

        it('should save the credentials', () => {
            expect(reducer(defaultState, action)).toEqual({
                ...defaultState,
                token: 'tokken',
                expiresAt: 123
            });
        });
    });

    describe('when logged out', () => {
        const action = Actions.logout();

        it('should purge the credentials', () => {
            expect(reducer({
                ...defaultState,
                token: 'tokken',
                expiresAt: 123
            }, action)).toEqual(defaultState);
        });
    });
});