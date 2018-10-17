import { ActionsUnion, createAction } from "../action-creator";
import {AuthPayload} from "../../shared/models";

export enum ActionTypes {
    AUTH_SUCCESS = 'AUTH_SUCCESS',
    AUTH_FAILED = 'AUTH_FAILED'
}

export const Actions = {
    authSuccess: (authData: AuthPayload) => createAction(ActionTypes.AUTH_SUCCESS, authData),
    authFailed: (reason: string) => createAction(ActionTypes.AUTH_FAILED, reason)
};

export type AuthActions = ActionsUnion<typeof Actions>;