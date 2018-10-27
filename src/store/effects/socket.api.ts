import {eventChannel} from "redux-saga";
import socketIO from "socket.io-client";
import {Endpoints, SocketEvents} from "../../shared/constants";

export const initConnection = (token: string): Promise<SocketIOClient.Socket> => {
    const socket = socketIO(Endpoints.WEBSOCKET);
    return new Promise<SocketIOClient.Socket>((resolve, reject) => {
        socket.on(SocketEvents.CONNECTED, () => {
            socket.emit(SocketEvents.AUTHENTICATE, token, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(socket);
                }
            });
        });
    });
};

export const createSocketChannel = (socket: SocketIOClient.Socket, event: string) => eventChannel(emit => {
    const emitPayload = payload => emit(payload);
    socket.on(event, emitPayload);
    return () => socket.off(event, emitPayload);
});

export const sendAnd = <T>(socket: SocketIOClient.Socket, event: string, payload: T): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
        socket.emit(event, payload, (error: any, response: T) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
};