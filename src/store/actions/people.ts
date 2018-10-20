import {ActionsUnion, createAction} from "../action-creator";
import {IPeople} from "../types";
import {IPerson} from "../../shared/models";

export enum ActionTypes {
    INIT_FETCH_PEOPLE = 'INIT_FETCH_PEOPLE',
    FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS',
    FETCH_PEOPLE_FAILED = 'FETCH_PEOPLE_FAILED',

    SELECT_PROFILE = 'SELECT_PROFILE',
    CLEAR_SELECTION = 'CLEAR_SELECTION',

    INIT_GET_CURRENT_USER_ID = 'INIT_GET_CURRENT_USER_ID',
    GET_CURRENT_USER_ID_SUCCESS = 'GET_CURRENT_USER_ID',

    INIT_UPDATE_PROFILE = 'INIT_UPDATE_PROFILE',
    UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED'
}

export const Actions = {
    initFetchPeople: () => createAction(ActionTypes.INIT_FETCH_PEOPLE),
    fetchPeopleSuccess: (people: IPeople) => createAction(ActionTypes.FETCH_PEOPLE_SUCCESS, people),
    fetchPeopleFailed: () => createAction(ActionTypes.FETCH_PEOPLE_FAILED),

    selectProfile: (profile: IPerson) => createAction(ActionTypes.SELECT_PROFILE, profile),
    clearSelection: () => createAction(ActionTypes.CLEAR_SELECTION),

    initGetCurrentUserId: () => createAction(ActionTypes.INIT_GET_CURRENT_USER_ID),
    getCurrentUserIdSuccess: (id: string) => createAction(ActionTypes.GET_CURRENT_USER_ID_SUCCESS, id),

    initUpdateProfile: (profile: IPerson) => createAction(ActionTypes.INIT_UPDATE_PROFILE, profile),
    updateProfileSuccess: (profile: IPerson) => createAction(ActionTypes.UPDATE_PROFILE_SUCCESS, profile),
    updateProfileFailed: (rollback: IPerson) => createAction(ActionTypes.UPDATE_PROFILE_FAILED, rollback)
};

export type PeopleActions = ActionsUnion<typeof Actions>;