import { connect } from "react-redux";
import {AppState} from "../../store/types";
import {Dispatch} from "redux";
import Authentication from "./Authentication";
import {AuthPayload} from "../../shared/models";
import {Actions as FromAuth, AuthActions} from "../../store/actions/auth";
import {Actions as FromGlobal, GlobalActions} from "../../store/actions/global";

const mapStateToProps = ({
    auth: { token, expiresAt, authenticated },
    global: { socketConnected, socketConnecting }
}: AppState) => ({
    token, expiresAt, authenticated,
    socketConnected, socketConnecting
});
export type AuthStoreProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch<AuthActions | GlobalActions>) => ({
    login: (credentials: AuthPayload) => dispatch(FromAuth.initAuthenticate(credentials)),
    connectWebSocket: () => dispatch(FromGlobal.initWebsocketConnection())
});
export type AuthDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Authentication);