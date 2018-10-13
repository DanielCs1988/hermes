import * as React from 'react';
import {Button, Text, Icon, Footer, FooterTab} from "native-base";
import { NavProp } from "../../../shared/models";
import { Routes } from "../../../shared/constants";
import { PlatformIcon } from "../../../shared/utils";

const TabBar = ({ navigation }: NavProp) => (
    <Footer>
        <FooterTab>
            <Button
                vertical
                active={navigation.state.index === 0}
                onPress={() => navigation.navigate(Routes.EVENTS)}
            >
                <Icon name={PlatformIcon('calendar')} />
                <Text>Events</Text>
            </Button>
            <Button
                vertical
                active={navigation.state.index === 1}
                onPress={() => navigation.navigate(Routes.PEOPLE)}
            >
                <Icon name={PlatformIcon('people')} />
                <Text>People</Text>
            </Button>
            <Button
                vertical
                active={navigation.state.index === 2}
                onPress={() => navigation.navigate(Routes.CONVERSATIONS)}
            >
                <Icon name={PlatformIcon('chatbubbles')} />
                <Text>Chat</Text>
            </Button>
        </FooterTab>
    </Footer>
);

export default TabBar;