import {createStackNavigator} from "react-navigation";
import {Routes} from "../../shared/constants";
import People from "./People";
import Profile from "./Profile/Profile";
import EditProfile from "./EditProfile/EditProfile";

const PeopleNavigator = createStackNavigator(
    {
        [Routes.PEOPLE]: People,
        [Routes.PROFILE]: Profile,
        [Routes.EDIT_PROFILE]: EditProfile
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

export default PeopleNavigator;