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
    id: string;
}

export interface Person extends Entity {
    givenName: string;
    familyName: string;
    profilePicture: ImageURISource;
    registeredAt: number;
    email?: string;
    phone?: string;
    address?: string;
    birthday?: number;
}

export interface Message extends Entity {
    content: string;
    from: string;
    to: string;
    createdAt: number;
}

export interface Location {
    name: string;
    latitude: number;
    longitude: number;
}

export interface Event extends Entity {
    title: string;
    description?: string;
    image?: ImageURISource;
    location: Location;
    organizerId: string;
    createdAt: number;
    from: number;
    to: number;
    participants: string[];
}

export interface Credentials {
    email: string;
    password: string;
}
export interface AuthPayload {
    token: string;
    userId: string;
    expiresIn?: number;
    refreshToken?: string;
}

export type NavProp = {
    navigation: NavigationScreenProp<any, any>;
};