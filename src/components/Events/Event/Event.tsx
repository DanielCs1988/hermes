import * as React from 'react';
import {IEvent as IEvent, NavProp} from "../../../shared/models";
import {Image} from "react-native";
import {Body, Button, Card, CardItem, Icon, Left, Right, Text, Thumbnail} from "native-base";
import moment from 'moment';
import {PlatformIcon} from "../../../shared/utils";
import {Routes} from "../../../shared/constants";

type Props = NavProp & {
    event: IEvent;
}
const Event = ({ event, navigation }: Props) => {
    const { title, from, location, participants, organizer: { profilePicture } } = event;
    return (
        <Card>
            <CardItem>
                <Left style={{ flex: 1, marginRight: 20 }}>
                    <Thumbnail source={profilePicture} />
                </Left>
                <Body style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text>{title}</Text>
                    <Text note>{moment(from).calendar()}</Text>
                </Body>
                <Right style={{ flex: 2, flexDirection: 'column', alignItems: 'center' }}>
                    <Icon name={PlatformIcon('locate')}/>
                    <Text note>{location.name}</Text>
                </Right>
            </CardItem>
            <CardItem cardBody>
                <Image source={event.image!} style={{ flex: 1, height: 300 }} />
            </CardItem>
            <CardItem>
                <Left style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    <Button info rounded bordered onPress={() => {
                        navigation.navigate(Routes.EVENT_DETAILS, { event })
                    }}>
                        <Icon name={PlatformIcon('more')}/>
                    </Button>
                    <Text note>Details</Text>
                </Left>
                <Body style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{`${participants.length} people will be there`}</Text>
                </Body>
                <Right style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    <Button success rounded bordered onPress={() => alert('You are going, yay!')}>
                        <Icon name={PlatformIcon('checkmark')}/>
                    </Button>
                    <Text note>Join</Text>
                </Right>
            </CardItem>
        </Card>
    );
};

export default Event;