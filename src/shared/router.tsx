import * as React from 'react';
import {createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator} from "react-navigation";
import {Routes} from "./constants";
import SideDrawer from "../components/UI/SideDrawer/SideDrawerContainer";
import TabBar from "../components/UI/TabBar/TabBar";
import EventNavigator from "../components/Event";
import PeopleNavigator from "../components/Profile";
import ChatNavigator from "../components/Conversations";
import AuthContainer from "../components/Authentication/AuthContainer";

const TabNavigator = createBottomTabNavigator(
    {
        [Routes.EVENT_STACK]: EventNavigator,
        [Routes.PEOPLE_STACK]: PeopleNavigator,
        [Routes.CHAT_STACK]: ChatNavigator
    },
    {
        initialRouteName: Routes.PEOPLE_STACK,
        tabBarComponent: props => <TabBar {...props} />,
        navigationOptions: ({ navigation: { state } }) => ({
            tabBarVisible: state.index === 0
        })
    }
);

const Drawer  = createDrawerNavigator(
    {
        [Routes.AUTH_SCREEN]: AuthContainer,
        [Routes.MAIN_APPLICATION]: TabNavigator
    },
    {
        initialRouteName: Routes.AUTH_SCREEN,
        contentComponent: props => <SideDrawer {...props} />
    }
);

const MainNavigator = createSwitchNavigator(
    {
        [Routes.AUTH_SCREEN]: AuthContainer,
        [Routes.DRAWER]: Drawer
    },
    {
        initialRouteName: Routes.AUTH_SCREEN
    }
);

export default MainNavigator;