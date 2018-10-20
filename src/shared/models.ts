import { NavigationScreenProp } from "react-navigation";
import {ImageURISource} from "react-native";

export interface IFormField {
    value: string;
    valid: boolean;
}
export interface DateFormField {
    value: number;
    valid: boolean;
}
export interface IForm {
    [key: string]: IFormField | DateFormField;
}

export interface Entity {
    id?: string;
}

export interface IPerson extends Entity {
    givenName: string;
    familyName: string;
    profilePicture: ImageURISource;
    registeredAt: number;
    email?: string;
    phone?: string;
    address?: string;
    birthday?: number;
}

export interface IMessage extends Entity {
    content: string;
    from?: string;
    to: string;
    createdAt?: number;
}

export interface IConversation {
    target: IPerson;
    lastMessage: IMessage;
}

export interface Location {
    name: string;
    latitude: number;
    longitude: number;
}

export interface IEvent extends Entity {
    title: string;
    description?: string;
    image?: ImageURISource;
    location: Location;
    organizer: IPerson;
    createdAt: number;
    from: number;
    to: number;
    participants: IPerson[];
}

export interface Credentials {
    email: string;
    password: string;
}
export interface AuthPayload {
    token: string;
    expiresIn?: number;
    refreshToken?: string;
}

export type NavProp = {
    navigation: NavigationScreenProp<any, any>;
};