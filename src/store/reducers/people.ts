import {PeopleActions} from "../actions/people";
import {PeopleState} from "../types";

const initialState: PeopleState = {
    people: {},
    loading: false,
    error: null,
    fetched: false
};

const peopleReducer = (state = initialState, action: PeopleActions) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default peopleReducer;