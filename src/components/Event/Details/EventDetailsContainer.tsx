import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import {Actions} from "../../../store/actions/global";
// import {Actions} from "../../../store/actions/events";

const mapDispatchToProps = (dispatch: Function) => ({
    // deleteEvent: (id: string) => dispatch(Actions.deleteEventSuccess(id))
    deleteEvent: () => dispatch(Actions.showError('Test!'))
});
export type EventDetailsDispatcher = ReturnType<typeof mapDispatchToProps>;

export default connect(
    null,
    mapDispatchToProps
)(EventDetails);