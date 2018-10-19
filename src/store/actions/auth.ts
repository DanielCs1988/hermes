import { ActionsUnion, createAction } from "../action-creator";
import {AuthPayload} from "../../shared/models";

export enum ActionTypes {
    AUTH_SUCCESS = 'AUTH_SUCCESS',
    AUTH_FAILED = 'AUTH_FAILED'
}

export const Actions = {
    authSuccess: (authData: AuthPayload) => createAction(ActionTypes.AUTH_SUCCESS, authData),
    authFailed: () => createAction(ActionTypes.AUTH_FAILED)
};

export type AuthActions = ActionsUnion<typeof Actions>;