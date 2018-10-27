import axios from 'axios';
import {Endpoints, SocketEvents} from "../../shared/constants";
import {withAuth} from "../../shared/utils";
import {IMessage} from "../../shared/models";
import {sendAnd} from "./socket.api";

export const fetchConversations = async (token: string) => {
    const { data: conversations } = await axios.get(`${Endpoints.CHAT}/conversations`, withAuth(token));
    return conversations;
};

export const fetchMessages = async (targetId: string, token: string) => {
    const { data: messages } = await axios.get(`${Endpoints.CHAT}/history/${targetId}`, withAuth(token));
    return messages;
};

export const sendMessage = (message: IMessage, socket) => {
    return sendAnd(socket, SocketEvents.SEND_MESSAGE, message);
};