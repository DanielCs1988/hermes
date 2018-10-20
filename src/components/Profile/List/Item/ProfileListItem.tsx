import * as React from 'react';
import {NavProp, IPerson as IPerson} from "../../../../shared/models";
import {Body, Icon, Left, ListItem, Right, Text, Thumbnail} from "native-base";
import {PlatformIcon} from "../../../../shared/utils";
import {Routes} from "../../../../shared/constants";

type Props = NavProp & {
    person: IPerson;
    onSelect: () => void;
};
const ProfileListItem = ({ person, navigation, onSelect }: Props) => {
    const { familyName, givenName, profilePicture } = person;
    return (
        <ListItem avatar noBorder style={{ borderBottomWidth: 2, paddingBottom: 5 }} onPress={() => {
            onSelect();
            navigation.navigate(Routes.CHAT_WINDOW);
        }}>
            <Left>
                <Thumbnail source={profilePicture} />
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