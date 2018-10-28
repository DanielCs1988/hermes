import { NavigationScreenProp } from "react-navigation";

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
    sub: string;
    givenName: string;
    familyName: string;
    profilePicture: string;
    registeredAt: number;
    email?: string;
    phone?: string;
    address?: string;
    birthday?: number;
    online?: boolean;
}

export interface IMessage extends Entity {
    content: string;
    to: string;
    from?: string;
    createdAt?: number;
}

export interface IConversation extends Entity {
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
    image: string;
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
    expiresAt: number;
}

export type NavProp = {
    navigation: NavigationScreenProp<any, any>;
};