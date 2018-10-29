import * as React from 'react';
import {NavProp, IPerson as IPerson} from "../../../../shared/models";
import {Body, Icon, Left, ListItem, Right, Text} from "native-base";
import {PlatformIcon} from "../../../../shared/utils";
import {Routes} from "../../../../shared/constants";
import CachedThumbnail from "../../../UI/CachedThumbnail/CachedThumbnail";
import OnlineMarker from "../../../UI/OnlineMarker/OnlineMarker";

type Props = NavProp & {
    person: IPerson;
    onSelect: () => void;
};
const ProfileListItem = ({ person, navigation, onSelect }: Props) => {
    const { familyName, givenName, profilePicture, online } = person;
    return (
        <ListItem avatar noBorder style={{ borderBottomWidth: 2, paddingBottom: 5 }} onPress={() => {
            onSelect();
            navigation.navigate(Routes.CHAT_WINDOW);
        }}>
            <Left>
                <CachedThumbnail source={profilePicture} style={{ marginLeft: 5 }} />
                <OnlineMarker online={online}/>
            </Left>
            <Body>
                <Text>{givenName} {familyName}</Text>
            </Body>
            <Right style={{ justifyContent: 'center' }}>
                <Icon name={PlatformIcon('arrow-dropleft')}/>
            </Right>
        </ListItem>
    );
};

export default ProfileListItem;