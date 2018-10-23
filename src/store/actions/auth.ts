import { ActionsUnion, createAction } from "../action-creator";
import {AuthPayload} from "../../shared/models";

export enum ActionTypes {
    AUTHENTICATE = 'AUTH_SUCCESS',
    INIT_LOGOUT = 'INIT_LOGOUT',
    LOGOUT = 'LOGOUT'
}

export const Actions = {
    authenticate: (authData: AuthPayload) => createAction(ActionTypes.AUTHENTICATE, authData),
    initLogout: () => createAction(ActionTypes.INIT_LOGOUT),
    logout: () => createAction(ActionTypes.LOGOUT)
};

export type AuthActions = ActionsUnion<typeof Actions>;