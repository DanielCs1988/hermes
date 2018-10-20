import { connect } from 'react-redux';
import {AppState} from "../../../store/types";
import ProfileList from "./ProfileList";
import {Actions, PeopleActions} from "../../../store/actions/people";
import {Dispatch} from "redux";
import {IPerson} from "../../../shared/models";
import {ConversationActions, Actions as ConvActions} from "../../../store/actions/conversations";

const mapStateToProps = ({ people: { people, fetched, loading } }: AppState) => ({
    people: Object.values(people),
    fetched, loading
});

const mapDispatchToProps = (dispatch: Dispatch<PeopleActions | ConversationActions>) => ({
    fetchPeople: () => dispatch(Actions.initFetchPeople()),
    getCurrentUser: () => dispatch(Actions.initGetCurrentUserId()),
    selectProfile: (profile: IPerson) => dispatch(Actions.selectProfile(profile)),
    selectTarget: (target: IPerson) => dispatch(ConvActions.selectTarget(target))
});
export type ProfileListDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileList);