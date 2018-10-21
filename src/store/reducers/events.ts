import {ActionTypes, EventActions} from "../actions/events";
import {AppState, EventState} from "../types";
import {IPerson} from "../../shared/models";
import {removeProperty} from "../../shared/utils";

export const initialState: EventState = {
    events: {},
    loading: false,
    fetched: false,
    selectedEvent: null
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
        case ActionTypes.SELECT_EVENT:
            return {
                ...state,
                selectedEvent: action.payload
            };
        case ActionTypes.CLEAR_SELECTION:
            return {
                ...state,
                selectedEvent: null
            };
        case ActionTypes.CREATE_EVENT:
        case ActionTypes.UPDATE_EVENT:
            return {
                ...state,
                events: {
                    ...state.events,
                    [action.payload.id]: action.payload
                },
                selectedEvent: action.payload.id
            };
        case ActionTypes.REPLACE_EVENT:
            const newEvent = action.payload.event;
            const newEvents = removeProperty(state.events, action.payload.optResId);
            newEvents[newEvent.id] = newEvent;
            return {
                ...state,
                events: newEvents,
                selectedEvent: newEvent.id
            };
        case ActionTypes.DELETE_EVENT:
            return {
                ...state,
                events: removeProperty(state.events, action.payload)
            };
        case ActionTypes.TOGGLE_EVENT_PARTICIPATION:
            const eventId = action.payload.eventId;
            return {
                ...state,
                events: {
                    ...state.events,
                    [eventId]: {
                        ...state.events[eventId],
                        participants: toggleUserParticipation(
                            state.events[eventId].participants,
                            action.payload.currentUser
                        )
                    }
                }
            };
        default:
            return state;
    }
};

export const getEvent = (id: string) => ({ events: { events } }: AppState) => {
    return events[id];
};

const toggleUserParticipation = (participants: IPerson[], currentUser: IPerson): IPerson[] => {
    return participants.find(user => user.id === currentUser.id) ?
        participants.filter(user => user.id !== currentUser.id) :
        [...participants, currentUser];
};

export default eventReducer;