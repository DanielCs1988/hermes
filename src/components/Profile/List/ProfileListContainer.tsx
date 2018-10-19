import { connect } from 'react-redux';
import {AppState} from "../../../store/types";
import ProfileList from "./ProfileList";
import {Actions} from "../../../store/actions/people";

const mapStateToProps = ({ people: { people, fetched, loading, error } }: AppState) => ({
    people: Object.values(people),
    fetched, loading, error
});

const mapDispatchToProps = (dispatch: Function) => ({
    fetchPeople: () => dispatch(Actions.fetchPeopleSuccess({}))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileList);