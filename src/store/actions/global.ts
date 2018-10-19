import {ActionsUnion, createAction} from "../action-creator";

export enum ActionTypes {
    SHOW_ERROR = 'SHOW_ERROR',
    CLEAR_ERROR = 'CLEAR_ERROR'
}

export const Actions = {
    showError: (error: string) => createAction(ActionTypes.SHOW_ERROR, error),
    clearError: () => createAction(ActionTypes.CLEAR_ERROR)
};

export type GlobalActions = ActionsUnion<typeof Actions>;