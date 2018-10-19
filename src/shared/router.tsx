import * as React from 'react';
import { createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import {Routes} from "./constants";
import SideDrawer from "../components/UI/SideDrawer/SideDrawer";
import TabBar from "../components/UI/TabBar/TabBar";
import EventNavigator from "../components/Event";
import PeopleNavigator from "../components/Profile";
import ChatNavigator from "../components/Conversations";

const TabNavigator = createBottomTabNavigator(
    {
        [Routes.EVENT_STACK]: EventNavigator,
        [Routes.PEOPLE_STACK]: PeopleNavigator,
        [Routes.CHAT_STACK]: ChatNavigator
    },
    {
        initialRouteName: Routes.EVENT_STACK,
        tabBarComponent: props => <TabBar {...props} />,
        navigationOptions: ({ navigation: { state } }) => ({
            tabBarVisible: state.index === 0
        })
    }
);

const Drawer  = createDrawerNavigator(
    {
        [Routes.MAIN_APPLICATION]: TabNavigator
    },
    {
        contentComponent: props => <SideDrawer {...props} />
    }
);

export default Drawer;