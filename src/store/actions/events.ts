import { ActionsUnion, createAction } from "../action-creator";
import {IEvent} from "../../shared/models";
import {RollbackError} from "../types";

export enum ActionTypes {
    FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS',
    FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED',
    CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS',
    CREATE_EVENT_FAILED = 'CREATE_EVENT_FAILED',
    UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS',
    UPDATE_EVENT_FAILED = 'UPDATE_EVENT_FAILED',
    DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS',
    DELETE_EVENT_FAILED = 'DELETE_EVENT_FAILED'
}

export const Actions = {
    fetchEventsSuccess: (events: IEvent[]) => createAction(ActionTypes.FETCH_EVENTS_SUCCESS, events),
    fetchEventsFailed: (reason: string) => createAction(ActionTypes.FETCH_EVENTS_FAILED, reason),
    createEventSuccess: (event: IEvent) => createAction(ActionTypes.CREATE_EVENT_SUCCESS, event),
    createEventFailed: (rollback: RollbackError<string>) => createAction(ActionTypes.CREATE_EVENT_FAILED, rollback),
    updateEventSuccess: (event: IEvent) => createAction(ActionTypes.UPDATE_EVENT_SUCCESS, event),
    updateEventFailed: (rollback: RollbackError<IEvent>) => createAction(ActionTypes.UPDATE_EVENT_FAILED, rollback),
    deleteEventSuccess: (id: string) => createAction(ActionTypes.DELETE_EVENT_SUCCESS, id),
    deleteEventFailed: (rollback: RollbackError<IEvent>) => createAction(ActionTypes.DELETE_EVENT_FAILED, rollback)
};

export type EventActions = ActionsUnion<typeof Actions>;