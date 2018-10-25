import axios from 'axios';
import {Endpoints} from "../../shared/constants";
import {withAuth} from "../../shared/utils";
import {IMessage} from "../../shared/models";

export const fetchConversations = async (token: string) => {
    const { data: conversations } = await axios.get(`${Endpoints.CHAT}/conversations`, withAuth(token));
    return conversations;
};

export const fetchMessages = async (targetId: string, token: string) => {
    const { data: messages } = await axios.get(`${Endpoints.CHAT}/history/${targetId}`, withAuth(token));
    return messages;
};

export const sendMessage = async (message: IMessage) => {
    // Call socket here
    return message;
};