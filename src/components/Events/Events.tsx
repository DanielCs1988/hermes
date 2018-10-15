import * as React from 'react';
import {Event as IEvent, NavProp} from "../../shared/models";
import {Container, DeckSwiper, Fab, Icon} from "native-base";
import Event from "./Event/Event";
import NavBar from "../UI/NavBar/NavBar";
import {View} from "react-native";
import {PlatformIcon} from "../../shared/utils";
import {Routes} from "../../shared/constants";

const organizerImage = { uri: 'https://pbs.twimg.com/profile_images/834093730244079616/0um-zqxI_400x400.jpg' };
const events: IEvent[] = [
    {
        id: 'id1',
        title: 'Crazy GOA party',
        description: 'Lorem ipsum etc.',
        image: { uri: 'https://i.pinimg.com/originals/b0/b7/b1/b0b7b114b759f274c704f83637254790.jpg' },
        createdAt: 1539542632486,
        from: 1542236400000,
        to: 1542322800000,
        location: {
            name: 'Somewhere',
            latitude: 47.4924430302,
            longitude: 19.0527914555
        },
        organizerId: 'Anon',
        participants: ['Anon', 'Other Anon']
    },
    {
        id: 'id2',
        title: 'Grill party',
        description: 'Lorem ipsum etc.',
        image: { uri: 'https://www.hoteltokert.hu/media/k2/items/cache/954fb0ebf1d84fb921bfb0b6e045d57f_XL.jpg' },
        createdAt: 1539542632486,
        from: 1542236400000,
        to: 1542322800000,
        location: {
            name: 'Somewhere else',
            latitude: -40.3434234234,
            longitude: 65.4324234423
        },
        organizerId: 'Other Anon',
        participants: ['Anon', 'Other Anon']
    }
];

const Events = ({ navigation }: NavProp) => (
    <Container>
        <NavBar navigation={navigation} title="Events" />
        <View style={{ padding: 10 }}>
            <DeckSwiper
                dataSource={events}
                renderItem={event => (
                    <Event
                        event={event}
                        organizerAvatar={organizerImage}
                        navigation={navigation}
                    />
                )}
            />
        </View>
        <Fab onPress={() => navigation.navigate(Routes.NEW_EVENT)} position="bottomRight">
            <Icon name={PlatformIcon('create')} />
        </Fab>
    </Container>
);
export default Events;