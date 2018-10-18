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
        case ActionTypes.CREATE_EVENT_SUCCESS:
            return {
                ...state,
                events: [...state.events, action.payload]
            };
        case ActionTypes.CREATE_EVENT_FAILED:
            // TODO: add UNIQUE dummy ID to newly created event!
            return {
                ...state,
                error: action.payload.error,
                events: state.events.filter(event => event.id !== action.payload.item)
            };
        case ActionTypes.UPDATE_EVENT_SUCCESS:
            return {
                ...state,
                events: state.events.map(event => {
                    if (event.id === action.payload.id) {
                        return action.payload;
                    }
                    return event;
                })
            };
        case ActionTypes.UPDATE_EVENT_FAILED:
            return {
                ...state,
                error: action.payload.error,
                events: state.events.map(event => {
                    if (event.id === action.payload.item.id) {
                        return action.payload.item;
                    }
                    return event;
                })
            };
        case ActionTypes.DELETE_EVENT_SUCCESS:
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.payload)
            };
        case ActionTypes.DELETE_EVENT_FAILED:
            return {
                ...state,
                error: action.payload.error,
                events: [...state.events, action.payload.item]
            };
        default:
            return state;
    }
};

export default eventReducer;