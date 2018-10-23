import { ActionsUnion, createAction } from "../action-creator";
import {AuthPayload} from "../../shared/models";

export enum ActionTypes {
    INIT_AUTHENTICATE = 'INIT_AUTHENTICATE',
    SAVE_CREDENTIALS = 'SAVE_CREDENTIALS',
    LOGIN = 'LOGIN',
    INIT_LOGOUT = 'INIT_LOGOUT',
    LOGOUT = 'LOGOUT'
}

export const Actions = {
    initAuthenticate: (authData: AuthPayload) => createAction(ActionTypes.INIT_AUTHENTICATE, authData),
    saveCredentials: (authData: AuthPayload) => createAction(ActionTypes.SAVE_CREDENTIALS, authData),
    login: () => createAction(ActionTypes.LOGIN),
    initLogout: () => createAction(ActionTypes.INIT_LOGOUT),
    logout: () => createAction(ActionTypes.LOGOUT)
};

export type AuthActions = ActionsUnion<typeof Actions>;