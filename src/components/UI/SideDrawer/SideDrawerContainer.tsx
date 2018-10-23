import { connect } from "react-redux";
import {AppState} from "../../../store/types";
import {Dispatch} from "redux";
import {Actions, AuthActions} from "../../../store/actions/auth";
import SideDrawer from "./SideDrawer";

const mapStateToProps = ({ auth: { token } }: AppState) => ({ token });

const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => ({
    logout: () => dispatch(Actions.initLogout())
});
export type SideDrawerDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideDrawer);