import {EventActions} from "../actions/events";
import {EventState} from "../types";

const initialState: EventState = {
    events: [],
    loading: false,
    error: null,
    fetched: false
};

const eventReducer = (state = initialState, action: EventActions) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default eventReducer;