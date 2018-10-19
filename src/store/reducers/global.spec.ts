import reducer, { initialState } from "./global";
import { Actions, GlobalActions } from "../actions/global";
import { GlobalState } from "../types";

describe('Global Reducer', () => {

    let defaultState: GlobalState;

    beforeEach(() => {
        defaultState = {
            ...initialState
        };
    });

    it('should return default state on invalid action', () => {
        expect(reducer(defaultState, {} as GlobalActions)).toEqual(defaultState);
    });

    describe('when an error happens', () => {
        const action = Actions.showError('Ooops...');

        it('should save the error', () => {
            expect(reducer(defaultState, action)).toEqual({
                ...defaultState, error: 'Ooops...'
            });
        });
    });

    describe('when clearing the error', () => {
        const action = Actions.clearError();

        it('should set the error in the state to null', () => {
            expect(reducer({
                ...defaultState, error: 'Oh s***!'
            }, action)).toEqual(defaultState);
        });
    });
});