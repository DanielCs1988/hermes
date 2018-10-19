import {ActionTypes, EventActions} from "../actions/events";
import {AppState, EventState} from "../types";

export const initialState: EventState = {
    events: [],
    loading: false,
    fetched: false
};

const eventReducer = (state = initialState, action: EventActions): EventState => {
    switch (action.type) {
        case ActionTypes.INIT_FETCH_EVENTS:
            return {
                ...state,
                loading: true
            };
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
                loading: false
            };
        case ActionTypes.CREATE_EVENT_OPTRES:
            return {
                ...state,
                events: [...state.events, action.payload]
            };
        case ActionTypes.CREATE_EVENT_SUCCESS:
            const optResId = action.payload.optResId;
            return {
                ...state,
                events: state.events.map(event => {
                    if (event.id === optResId) {
                        return action.payload.event;
                    }
                    return event;
                })
            };
        case ActionTypes.CREATE_EVENT_FAILED:
            // TODO: add UNIQUE dummy ID to newly created event!
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.payload)
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
                events: state.events.map(event => {
                    if (event.id === action.payload.id) {
                        return action.payload;
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
                events: [...state.events, action.payload]
            };
        default:
            return state;
    }
};

export const getEvent = (id: string) => ({ events: { events } }: AppState) => {
    return events.find(event => event.id === id);
};

export default eventReducer;