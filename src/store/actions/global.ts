import { ActionsUnion, createAction } from "../action-creator";

export enum ActionTypes {
    INIT_WEBSOCKET_CONNECTION = 'INIT_WEBSOCKET_CONNECTION',
    WEBSOCKET_CONNECTED = 'WEBSOCKET_CONNECTED',
    SHOW_ERROR = 'SHOW_ERROR',
    CLEAR_ERROR = 'CLEAR_ERROR'
}

export const Actions = {
    initWebsocketConnection: () => createAction(ActionTypes.INIT_WEBSOCKET_CONNECTION),
    websocketConnected: () => createAction(ActionTypes.WEBSOCKET_CONNECTED),
    showError: (error: string) => createAction(ActionTypes.SHOW_ERROR, error),
    clearError: () => createAction(ActionTypes.CLEAR_ERROR)
};

export type GlobalActions = ActionsUnion<typeof Actions>;