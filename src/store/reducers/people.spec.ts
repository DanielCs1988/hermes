import reducer, {getCurrentUser, getPerson, initialState} from "./people";
import { Actions, PeopleActions } from "../actions/people";
import { PeopleState } from "../types";
import {people} from "./seed";

describe('People Reducer', () => {

    let defaultState: PeopleState;
    const newProfile = {
        ...people['p01'],
        phone: '12345',
        givenName: 'Jack',
        address: 'New York'
    };

    beforeEach(() => {
        defaultState = {
            ...initialState
        };
    });

    it('should return default state on invalid action', () => {
        expect(reducer(defaultState, {} as PeopleActions)).toEqual(defaultState);
    });

    describe('when fetching profiles is successful', () => {
        const action = Actions.fetchPeopleSuccess(people);

        it('should cancel loading', () => {
            expect(reducer({
                ...defaultState, loading: true
            }, action).loading).toBe(false);
        });

        it('should set fetched to true', () => {
            expect(reducer(defaultState, action).fetched).toBe(true);
        });

        it('should not touch current user info', () => {
            expect(reducer(defaultState, action).currentUser).toBeNull();
        });

        it('should save the profiles', () => {
            expect(reducer(defaultState, action).people).toEqual(people);
        });
    });

    describe('when fetching the profiles fails', () => {
        const action = Actions.fetchPeopleFailed();

        it('should cancel loading', () => {
            expect(reducer({
                ...defaultState, loading: true
            }, action)).toEqual(defaultState);
        });
    });

    describe('when the current user id arrives', () => {
        const action = Actions.getCurrentUserIdSuccess('superman');

        it('should save the id', () => {
            expect(reducer(defaultState, action)).toEqual({
                ...defaultState, currentUser: 'superman'
            })
        });
    });

    describe('when updating a profile', () => {
        const action = Actions.updateProfileSuccess(newProfile);

        it('should update the correct profile', () => {
            expect(reducer({
                ...defaultState, people
            }, action)).toEqual({
                ...defaultState, people: {
                    ...people,
                    'p01': newProfile
                }
            })
        });
    });

    describe('when updating a profile is rejected by the server', () => {
        const action = Actions.updateProfileFailed(people['p01']);

        it('should revert all the changes', () => {
            expect(reducer({
                ...defaultState, people: {
                    ...people,
                    'p01': newProfile
                }
            }, action)).toEqual({
                ...defaultState, people
            })
        });
    });

    describe('when using the getPerson selector', () => {
        it('should return the requested user', () => {
            // @ts-ignore
            expect(getPerson('p01')({ people: { ...defaultState, people } })).toEqual(people['p01']);
        });
    });

    describe('when using the getCurrentUser selector', () => {
        it('should return the current user', () => {
            // @ts-ignore
            expect(getCurrentUser({ people: {
                ...defaultState,
                people,
                currentUser: 'p02'
            } })).toEqual(people['p02']);
        });
    });
});