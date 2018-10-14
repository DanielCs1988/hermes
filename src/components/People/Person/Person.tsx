import * as React from 'react';
import {NavProp, Person as IPerson} from "../../../shared/models";
import {Body, Icon, Left, ListItem, Right, Text, Thumbnail} from "native-base";
import {PlatformIcon} from "../../../shared/utils";
import {Routes} from "../../../shared/constants";

type Props = NavProp & {
    person: IPerson;
};
const Person = ({ person, navigation }: Props) => {
    const { familyName, givenName, profilePicture } = person;
    return (
        <ListItem avatar onPress={() => navigation.navigate(Routes.CHAT_WINDOW, { person })}>
            <Left>
                <Thumbnail source={profilePicture} />
            </Left>
            <Body>
                <Text>{givenName} {familyName}</Text>
            </Body>
            <Right>
                <Icon name={PlatformIcon('arrow-dropleft')}/>
            </Right>
        </ListItem>
    );
};

export default Person;