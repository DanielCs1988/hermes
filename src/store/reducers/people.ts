import {ActionTypes, PeopleActions} from "../actions/people";
import {AppState, PeopleState} from "../types";
import {IPerson} from "../../shared/models";

export const initialState: PeopleState = {
    people: {},
    currentUser: null,
    selectedProfile: null
};

const peopleReducer = (state = initialState, action: PeopleActions): PeopleState => {
    switch (action.type) {
        case ActionTypes.FETCH_PEOPLE_SUCCESS:
            return {
                ...state,
                people: action.payload
            };
        case ActionTypes.SELECT_PROFILE:
            return {
                ...state,
                selectedProfile: action.payload
            };
        case ActionTypes.CLEAR_SELECTION:
            return {
                ...state,
                selectedProfile: null
            };
        case ActionTypes.GET_CURRENT_USER_ID_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            };
        case ActionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                people: {
                    ...state.people,
                    [action.payload.id]: action.payload
                }
            };
        case ActionTypes.UPDATE_PROFILE_FAILED:
            return {
                ...state,
                people: {
                    ...state.people,
                    [action.payload.id]: action.payload
                }
            };
        default:
            return state;
    }
};

export const getPerson = (id: string) => ({ people: { people } }: AppState): IPerson => {
    return people[id];
};

export const getPeople = ({ people: { people } }: AppState) => people;

export const getCurrentUser = ({ people: { people, currentUser } }: AppState): IPerson | null => {
    return currentUser ? people[currentUser] : null;
};

export const getSelectedProfile = ({ people: { selectedProfile } }: AppState) => {
    return selectedProfile;
};

export default peopleReducer;