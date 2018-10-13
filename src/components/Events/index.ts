import {createStackNavigator} from "react-navigation";
import {Routes} from "../../shared/constants";
import Events from "./Events";
import EventDetails from "./EventDetails/EventDetails";
import EditEvent from "./EditEvent/EditEvent";
import NewEvent from "./NewEvent/NewEvent";

const EventNavigator = createStackNavigator(
    {
        [Routes.EVENTS]: Events,
        [Routes.EVENT_DETAILS]: EventDetails,
        [Routes.EDIT_EVENT]: EditEvent,
        [Routes.NEW_EVENT]: NewEvent
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export default EventNavigator;