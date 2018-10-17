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
    loading: false,
    error: null,
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
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export const getPerson = (id: string) => ({ people: { people } }: AppState): IPerson => {
    return people[id];
};

export default peopleReducer;