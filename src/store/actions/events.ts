import { ActionsUnion, createAction } from "../action-creator";
import {IEvent, IPerson} from "../../shared/models";
import {IEventList} from "../types";

export enum ActionTypes {
    INIT_FETCH_EVENTS = 'INIT_FETCH_EVENTS',
    FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS',
    FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED',

    SELECT_EVENT = 'SELECT_EVENT',
    CLEAR_SELECTION = 'CLEAR_SELECTION',

    INIT_CREATE_EVENT = 'INIT_CREATE_EVENT',
    CREATE_EVENT = 'CREATE_EVENT',
    REPLACE_EVENT = 'REPLACE_EVENT',

    INIT_UPDATE_EVENT = 'INIT_UPDATE_EVENT',
    UPDATE_EVENT = 'UPDATE_EVENT',

    INIT_DELETE_EVENT = 'INIT_DELETE_EVENT',
    DELETE_EVENT = 'DELETE_EVENT',

    INIT_TOGGLE_EVENT_PARTICIPATION = 'INIT_TOGGLE_EVENT_PARTICIPATION',
    TOGGLE_EVENT_PARTICIPATION = 'TOGGLE_EVENT_PARTICIPATION'
}

export const Actions = {
    initFetchEvents: () => createAction(ActionTypes.INIT_FETCH_EVENTS),
    fetchEventsSuccess: (events: IEventList) => createAction(ActionTypes.FETCH_EVENTS_SUCCESS, events),
    fetchEventsFailed: () => createAction(ActionTypes.FETCH_EVENTS_FAILED),

    selectEvent: (eventId: string) => createAction(ActionTypes.SELECT_EVENT, eventId),
    clearSelection: () => createAction(ActionTypes.CLEAR_SELECTION),

    initCreateEvent: (event: IEvent) => createAction(ActionTypes.INIT_CREATE_EVENT, event),
    createEvent: (event: IEvent) => createAction(ActionTypes.CREATE_EVENT, event),
    replaceEvent: (event: IEvent, optResId: string) => createAction(
        ActionTypes.REPLACE_EVENT, { event, optResId }
    ),

    initUpdateEvent: (event: IEvent) => createAction(ActionTypes.INIT_UPDATE_EVENT, event),
    updateEvent: (event: IEvent) => createAction(ActionTypes.UPDATE_EVENT, event),

    initDeleteEvent: (event: IEvent) => createAction(ActionTypes.INIT_DELETE_EVENT, event),
    deleteEvent: (id: string) => createAction(ActionTypes.DELETE_EVENT, id),

    initToggleEventParticipation: (eventId: string) => createAction(
        ActionTypes.INIT_TOGGLE_EVENT_PARTICIPATION, eventId
    ),
    toggleEventParticipation: (eventId: string, currentUser: IPerson) => createAction(
        ActionTypes.TOGGLE_EVENT_PARTICIPATION, { eventId, currentUser }
    )
};

export type EventActions = ActionsUnion<typeof Actions>;