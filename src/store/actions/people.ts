import {ActionsUnion, createAction} from "../action-creator";
import {IPeople} from "../types";
import {IPerson} from "../../shared/models";

export enum ActionTypes {
    FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS',
    FETCH_PEOPLE_FAILED = 'FETCH_PEOPLE_FAILED',
    UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED'
}

export const Actions = {
    fetchPeopleSuccess: (people: IPeople) => createAction(ActionTypes.FETCH_PEOPLE_SUCCESS, people),
    fetchPeopleFailed: () => createAction(ActionTypes.FETCH_PEOPLE_FAILED),
    updateProfileSuccess: (profile: IPerson) => createAction(ActionTypes.UPDATE_PROFILE_SUCCESS, profile),
    updateProfileFailed: (rollback: IPerson) => createAction(ActionTypes.UPDATE_PROFILE_FAILED, rollback)
};

export type PeopleActions = ActionsUnion<typeof Actions>;