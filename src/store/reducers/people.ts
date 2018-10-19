import {ActionTypes, PeopleActions} from "../actions/people";
import {AppState, PeopleState} from "../types";
import {IPerson} from "../../shared/models";

export const initialState: PeopleState = {
    people: {
        'asd': {
            id: 'asd',
            givenName: 'John',
            familyName: 'Smith',
            registeredAt: 28000000,
            profilePicture: { uri: 'https://pbs.twimg.com/profile_images/834093730244079616/0um-zqxI_400x400.jpg' },
            email: 'anon@tor.com',
            phone: 'no way',
            address: 'Somewhere hidden',
            birthday: 3123213123
        },
        'qrt': {
            id: 'qrt',
            givenName: 'Jane',
            familyName: 'Smith',
            registeredAt: 58000000,
            profilePicture: { uri: 'https://usercontent2.hubstatic.com/14052231_f520.jpg' }
        }
    },
    currentUser: 'asd',
    loading: false,
    fetched: false
};

const peopleReducer = (state = initialState, action: PeopleActions): PeopleState => {
    switch (action.type) {
        case ActionTypes.FETCH_PEOPLE_SUCCESS:
            return {
                ...state,
                people: action.payload,
                loading: false,
                fetched: true
            };
        case ActionTypes.FETCH_PEOPLE_FAILED:
            return {
                ...state,
                loading: false
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

export const getCurrentUser = ({ people: { people, currentUser } }: AppState): IPerson | null => {
    return currentUser ? people[currentUser] : null;
};

export default peopleReducer;