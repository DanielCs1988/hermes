import * as React from 'react';
import {Button, Text, Icon, Footer, FooterTab} from "native-base";
import { NavProp } from "../../../shared/models";
// import { Routes } from "../../../shared/constants";
import { PlatformIcon } from "../../../shared/utils";

const TabBar = ({ navigation }: NavProp) => (
    <Footer>
        <FooterTab>
            <Button
                vertical
                active={navigation.state.index === 0}
                onPress={() => navigation.navigate('')}
            >
                <Icon name={PlatformIcon('share')} />
                <Text>Share Place</Text>
            </Button>
        </FooterTab>
    </Footer>
);

export default TabBar;