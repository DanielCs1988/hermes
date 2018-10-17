import * as React from 'react';
import {NavProp, IPerson} from "../../../shared/models";
import {Body, Left, ListItem, Right, Text, Thumbnail} from "native-base";
import {Routes} from "../../../shared/constants";
import moment from "moment";

type Props = NavProp & {
    person: IPerson;
}
const Conversation = ({ person, navigation }: Props) => (
    <ListItem avatar
              onPress={() => navigation.navigate(Routes.CHAT_WINDOW, { person })}>
        <Left>
            <Thumbnail source={person.profilePicture} />
        </Left>
        <Body>
            <Text>{`${person.givenName} ${person.familyName}`}</Text>
            <Text note>Last message will appear here!</Text>
        </Body>
        <Right>
            <Text note>{moment('8:30 PM', 'LT').format('LT')}</Text>
        </Right>
    </ListItem>
);

export default Conversation;