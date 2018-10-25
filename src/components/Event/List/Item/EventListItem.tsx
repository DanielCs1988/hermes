import * as React from 'react';
import {IEvent} from "../../../../shared/models";
import { CachedImage } from 'react-native-cached-image';
import {Body, Button, Card, CardItem, Icon, Left, Right, Spinner, Text} from "native-base";
import moment from 'moment';
import {PlatformIcon} from "../../../../shared/utils";
import CachedThumbnail from "../../../UI/CachedThumbnail/CachedThumbnail";

type Props = {
    event: IEvent | null;
    onSelect: () => void;
    onChangeParticipation: () => void;
    participating: boolean;
}
const EventListItem = ({ event, onSelect, onChangeParticipation, participating }: Props) => {
    if (event) {
        const { title, from, location, participants, organizer: { profilePicture } } = event;
        return (
            <Card>
                <CardItem>
                    <Left style={{ flex: 1, marginRight: 20 }}>
                        <CachedThumbnail source={profilePicture} />
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
                    <CachedImage
                        source={{ uri: event.image }}
                        style={{ flex: 1, height: 300 }}
                    />
                </CardItem>
                <CardItem>
                    <Left style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <Button info rounded bordered onPress={onSelect}>
                            <Icon name={PlatformIcon('more')}/>
                        </Button>
                        <Text note>Details</Text>
                    </Left>
                    <Body style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{`${participants.length} people will be there`}</Text>
                    </Body>
                    <Right style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <Button success rounded bordered onPress={onChangeParticipation}>
                            <Icon name={ participating ?
                                PlatformIcon('close') :
                                PlatformIcon('checkmark') }
                            />
                        </Button>
                        <Text note>{ participating ? 'Not going' : 'Join' }</Text>
                    </Right>
                </CardItem>
            </Card>
        );
    }
    return <Spinner color="green" />;
};

export default EventListItem;