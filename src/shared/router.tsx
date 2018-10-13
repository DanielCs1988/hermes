import * as React from 'react';
import { createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import {Routes} from "./constants";
import SideDrawer from "../components/UI/SideDrawer/SideDrawer";
import TabBar from "../components/UI/TabBar/TabBar";
import EventNavigator from "../components/Events";
import PeopleNavigator from "../components/People";
import ChatNavigator from "../components/Conversations";

const TabNavigator = createBottomTabNavigator(
    {
        [Routes.EVENT_STACK]: EventNavigator,
        [Routes.PEOPLE_STACK]: PeopleNavigator,
        [Routes.CHAT_STACK]: ChatNavigator
    },
    {
        initialRouteName: Routes.CHAT_STACK,
        tabBarComponent: props => <TabBar {...props} />
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