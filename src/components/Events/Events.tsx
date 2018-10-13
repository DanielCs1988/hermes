import * as React from 'react';
import { NavProp } from "../../shared/models";
import {Button, Container, Content, Fab, H1, Icon, Text} from "native-base";
import {Routes} from "../../shared/constants";
import {PlatformIcon} from "../../shared/utils";
import NavBar from "../UI/NavBar/NavBar";

const Events = ({ navigation }: NavProp) => (
    <Container>
        <NavBar navigation={navigation} title="Events" />
        <Content>
            <H1>Events Panel</H1>
            <Button onPress={() => navigation.navigate(Routes.EDIT_EVENT)}>
                <Text>Edit Event</Text>
            </Button>
            <Button onPress={() => navigation.navigate(Routes.EVENT_DETAILS)}>
                <Text>Event Details</Text>
            </Button>
        </Content>
        <Fab onPress={() => navigation.navigate(Routes.NEW_EVENT)} position="bottomRight">
            <Icon name={PlatformIcon('create')} />
        </Fab>
    </Container>
);
export default Events;