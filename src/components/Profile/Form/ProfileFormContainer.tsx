import { connect } from "react-redux";
import {AppActions, AppState} from "../../../store/types";
import {Dispatch} from "redux";
import ProfileForm from "./ProfileForm";
import {IPerson} from "../../../shared/models";
import {Actions} from "../../../store/actions/people";

const mapStateToProps = ({ people: { selectedProfile } }: AppState) => ({ profile: selectedProfile });

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
    updateProfile: (profile: IPerson) => dispatch(Actions.initUpdateProfile(profile))
});
export type ProfileFormDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileForm);