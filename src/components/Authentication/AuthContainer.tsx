import { connect } from "react-redux";
import {AppState} from "../../store/types";
import {Dispatch} from "redux";
import Authentication from "./Authentication";
import {AuthPayload} from "../../shared/models";
import {Actions, AuthActions} from "../../store/actions/auth";

const mapStateToProps = ({ auth: { token, expiresAt } }: AppState) => ({
    token, expiresAt
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => ({
    login: (credentials: AuthPayload) => dispatch(Actions.authenticate(credentials))
});
export type AuthDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Authentication);