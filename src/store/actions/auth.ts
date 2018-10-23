import { ActionsUnion, createAction } from "../action-creator";
import {AuthPayload} from "../../shared/models";

export enum ActionTypes {
    AUTH_SUCCESS = 'AUTH_SUCCESS'
}

export const Actions = {
    authSuccess: (authData: AuthPayload) => createAction(ActionTypes.AUTH_SUCCESS, authData)
};

export type AuthActions = ActionsUnion<typeof Actions>;