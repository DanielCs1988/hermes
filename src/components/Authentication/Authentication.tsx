import * as React from 'react';
import Auth0 from 'react-native-auth0';
import {Routes, StorageKeys} from "../../shared/constants";
import {NavProp} from "../../shared/models";
import {AuthState} from "../../store/types";
import {AuthDispatchers} from "./AuthContainer";
import {AsyncStorage} from "react-native";
import {showErrorMessage} from "../../shared/utils";

const auth0 = new Auth0({
    domain: 'danielcs88.eu.auth0.com',
    clientId: ''
});

type Props = NavProp & AuthState & AuthDispatchers;

class Authentication extends React.Component<Props> {
    componentDidMount() {
        this.authenticate();
    };

    componentDidUpdate() {
        if (this.props.authenticated) {
            this.props.navigation.navigate(Routes.MAIN_APPLICATION);
        }
    }

    private authenticate = async () => {
        const expiresAt = + await AsyncStorage.getItem(StorageKeys.EXPIRES_AT);
        if (expiresAt && expiresAt > new Date().getTime()) {
            const token = await AsyncStorage.getItem(StorageKeys.TOKEN);
            this.props.login({ token, expiresAt });
        } else {
            const { accessToken: token, expiresIn } = await auth0.webAuth.authorize({
                    scope: 'openid profile',
                    audience: 'https://hermes-social-server.herokuapp.com/'
                });
            const expiresAt = new Date().getTime() + expiresIn * 1000;
            this.handleLogin(token, expiresAt);
        }
    };

    private handleLogin = (token: string, expiresAt: number) => {
        AsyncStorage.multiSet([
            [StorageKeys.TOKEN, token],
            [StorageKeys.EXPIRES_AT, expiresAt.toString()]
        ]).catch(err => showErrorMessage(err.message));
        this.props.login({ token, expiresAt });
    };

    render() {
        return null;
    }
}

export default Authentication;