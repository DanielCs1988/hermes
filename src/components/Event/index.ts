import { createStackNavigator } from "react-navigation";
import { Routes } from "../../shared/constants";
import EventListContainer from "./List/EventListContainer";
import EventDetailsContainer from "./Details/EventDetailsContainer";
import EventFormContainer from "./Form/EventFormContainer";

const EventNavigator = createStackNavigator(
    {
        [Routes.EVENTS]: EventListContainer,
        [Routes.EVENT_DETAILS]: EventDetailsContainer,
        [Routes.EDIT_EVENT]: EventFormContainer,
        [Routes.NEW_EVENT]: EventFormContainer
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export default EventNavigator;