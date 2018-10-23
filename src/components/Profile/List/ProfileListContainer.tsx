import { connect } from 'react-redux';
import {AppState} from "../../../store/types";
import ProfileList from "./ProfileList";
import {Actions, PeopleActions} from "../../../store/actions/people";
import {Dispatch} from "redux";
import {IPerson} from "../../../shared/models";
import {ConversationActions, Actions as ConvActions} from "../../../store/actions/conversations";

const mapStateToProps = ({ people: { people } }: AppState) => ({
    people: Object.values(people)
});

const mapDispatchToProps = (dispatch: Dispatch<PeopleActions | ConversationActions>) => ({
    selectProfile: (profile: IPerson) => dispatch(Actions.selectProfile(profile)),
    selectTarget: (target: IPerson) => dispatch(ConvActions.selectTarget(target))
});
export type ProfileListDispatchers = ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileList);