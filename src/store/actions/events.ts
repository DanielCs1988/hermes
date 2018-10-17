import { ActionsUnion, createAction } from "../action-creator";
import {IEvent} from "../../shared/models";

export enum ActionTypes {
    FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS',
    FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED'
}

export const Actions = {
    fetchEventsSuccess: (events: IEvent[]) => createAction(ActionTypes.FETCH_EVENTS_SUCCESS, events),
    fetchEventsFailed: (reason: string) => createAction(ActionTypes.FETCH_EVENTS_FAILED, reason)
};

export type EventActions = ActionsUnion<typeof Actions>;