import { NavigationScreenProp } from "react-navigation";

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