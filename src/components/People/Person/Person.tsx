import * as React from 'react';
import { Person as IPerson } from "../../../shared/models";
import {Body, Icon, Left, ListItem, Right, Text, Thumbnail} from "native-base";
import {PlatformIcon} from "../../../shared/utils";

type Props = {
    person: IPerson;
};
const Person = ({ person: { id, familyName, givenName, profilePicture } }: Props) => (
    <ListItem avatar onPress={() => alert(`Clicked on chat with id ${id}!`)}>
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

export default Person;