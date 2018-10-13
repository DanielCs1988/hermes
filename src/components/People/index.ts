import {createStackNavigator} from "react-navigation";
import {Routes} from "../../shared/constants";
import People from "./People";
import Profile from "./Profile/Profile";

const PeopleNavigator = createStackNavigator(
    {
        [Routes.PEOPLE]: People,
        [Routes.PROFILE]: Profile
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export default PeopleNavigator;