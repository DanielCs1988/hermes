import { ActionsUnion, createAction } from "../action-creator";
import {IEvent, IPerson} from "../../shared/models";

export enum ActionTypes {
    INIT_FETCH_EVENTS = 'INIT_FETCH_EVENTS',
    FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS',
    FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED',

    INIT_SELECT_EVENT = 'INIT_SELECT_EVENT',
    SELECT_EVENT = 'SELECT_EVENT',
    CLEAR_SELECTION = 'CLEAR_SELECTION',

    INIT_CREATE_EVENT_FORM = 'INIT_CREATE_EVENT_FORM',
    INIT_CREATE_EVENT = 'INIT_CREATE_EVENT',
    CREATE_EVENT_OPTRES = 'CREATE_EVENT_OPTRES',
    CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS',
    CREATE_EVENT_FAILED = 'CREATE_EVENT_FAILED',

    INIT_UPDATE_EVENT = 'INIT_UPDATE_EVENT',
    UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS',
    UPDATE_EVENT_FAILED = 'UPDATE_EVENT_FAILED',

    INIT_DELETE_EVENT = 'INIT_DELETE_EVENT',
    DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS',
    DELETE_EVENT_FAILED = 'DELETE_EVENT_FAILED',

    INIT_TOGGLE_EVENT_PARTICIPATION = 'INIT_TOGGLE_EVENT_PARTICIPATION',
    TOGGLE_EVENT_PARTICIPATION = 'TOGGLE_EVENT_PARTICIPATION'
}

export const Actions = {
    initFetchEvents: () => createAction(ActionTypes.INIT_FETCH_EVENTS),
    fetchEventsSuccess: (events: IEvent[]) => createAction(ActionTypes.FETCH_EVENTS_SUCCESS, events),
    fetchEventsFailed: () => createAction(ActionTypes.FETCH_EVENTS_FAILED),

    initSelectEvent: (event: IEvent) => createAction(ActionTypes.INIT_SELECT_EVENT, event),
    selectEvent: (event: IEvent) => createAction(ActionTypes.SELECT_EVENT, event),
    clearSelection: () => createAction(ActionTypes.CLEAR_SELECTION),

    initCreateEventForm: () => createAction(ActionTypes.INIT_CREATE_EVENT_FORM),
    initCreateEvent: (event: IEvent) => createAction(ActionTypes.INIT_CREATE_EVENT, event),
    createEventOptRes: (event: IEvent) => createAction(ActionTypes.CREATE_EVENT_OPTRES, event),
    createEventSuccess: (event: IEvent, optResId: string) => createAction(
        ActionTypes.CREATE_EVENT_SUCCESS, { event, optResId }
    ),
    createEventFailed: (rollback: string) => createAction(ActionTypes.CREATE_EVENT_FAILED, rollback),

    initUpdateEvent: (event: IEvent) => createAction(ActionTypes.INIT_UPDATE_EVENT, event),
    updateEventSuccess: (event: IEvent) => createAction(ActionTypes.UPDATE_EVENT_SUCCESS, event),
    updateEventFailed: (rollback: IEvent) => createAction(ActionTypes.UPDATE_EVENT_FAILED, rollback),

    initDeleteEvent: (event: IEvent) => createAction(ActionTypes.INIT_DELETE_EVENT, event),
    deleteEventSuccess: (id: string) => createAction(ActionTypes.DELETE_EVENT_SUCCESS, id),
    deleteEventFailed: (rollback: IEvent) => createAction(ActionTypes.DELETE_EVENT_FAILED, rollback),

    initToggleEventParticipation: (eventId: string) => createAction(
        ActionTypes.INIT_TOGGLE_EVENT_PARTICIPATION, eventId
    ),
    toggleEventParticipation: (eventId: string, currentUser: IPerson) => createAction(
        ActionTypes.TOGGLE_EVENT_PARTICIPATION, { eventId, currentUser }
    ),

};

export type EventActions = ActionsUnion<typeof Actions>;