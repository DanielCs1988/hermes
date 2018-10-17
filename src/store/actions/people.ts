import {ActionsUnion, createAction} from "../action-creator";
import {IPeople} from "../types";

export enum ActionTypes {
    FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS',
    FETCH_PEOPLE_FAILED = 'FETCH_PEOPLE_FAILED'
}

export const Actions = {
    fetchPeopleSuccess: (people: IPeople) => createAction(ActionTypes.FETCH_PEOPLE_SUCCESS, people),
    fetchPeopleFailed: (reason: string) => createAction(ActionTypes.FETCH_PEOPLE_FAILED, reason)
};

export type PeopleActions = ActionsUnion<typeof Actions>;