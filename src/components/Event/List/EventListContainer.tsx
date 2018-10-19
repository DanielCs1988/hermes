import { connect } from 'react-redux';
import EventList from "./EventList";
import {AppState} from "../../../store/types";
import {Actions} from "../../../store/actions/events";

const mapStateToProps = ({ events: { events, fetched, loading } }: AppState) => ({
    events, fetched, loading
});

const mapDispatchToProps = (dispatch: Function) => ({
    fetchEvents: () => dispatch(Actions.initFetchEvents())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);