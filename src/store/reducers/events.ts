import {ActionTypes, EventActions} from "../actions/events";
import {EventState} from "../types";

const initialState: EventState = {
    events: [],
    loading: false,
    error: null,
    fetched: false
};

const eventReducer = (state = initialState, action: EventActions): EventState => {
    switch (action.type) {
        case ActionTypes.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload,
                loading: false,
                fetched: true
            };
        case ActionTypes.FETCH_EVENTS_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default eventReducer;