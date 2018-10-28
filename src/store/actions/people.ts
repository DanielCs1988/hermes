import {ActionsUnion, createAction} from "../action-creator";
import {IPeople} from "../types";
import {IPerson} from "../../shared/models";

export enum ActionTypes {
    FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS',

    SELECT_PROFILE = 'SELECT_PROFILE',
    CLEAR_SELECTION = 'CLEAR_SELECTION',

    GET_CURRENT_USER_ID_SUCCESS = 'GET_CURRENT_USER_ID',

    INIT_UPDATE_PROFILE = 'INIT_UPDATE_PROFILE',
    UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED',

    UPDATE_ONLINE_USERS = 'UPDATE_ONLINE_USERS'
}

export const Actions = {
    fetchPeopleSuccess: (people: IPeople) => createAction(ActionTypes.FETCH_PEOPLE_SUCCESS, people),

    selectProfile: (profile: IPerson) => createAction(ActionTypes.SELECT_PROFILE, profile),
    clearSelection: () => createAction(ActionTypes.CLEAR_SELECTION),

    getCurrentUserIdSuccess: (id: string) => createAction(ActionTypes.GET_CURRENT_USER_ID_SUCCESS, id),

    initUpdateProfile: (profile: IPerson) => createAction(ActionTypes.INIT_UPDATE_PROFILE, profile),
    updateProfileSuccess: (profile: IPerson) => createAction(ActionTypes.UPDATE_PROFILE_SUCCESS, profile),
    updateProfileFailed: (rollback: IPerson) => createAction(ActionTypes.UPDATE_PROFILE_FAILED, rollback),

    updateOnlineUsers: (userIdList: string[]) => createAction(ActionTypes.UPDATE_ONLINE_USERS, userIdList)
};

export type PeopleActions = ActionsUnion<typeof Actions>;