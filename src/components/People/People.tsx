import * as React from 'react';
import {NavProp, Person as IPerson} from "../../shared/models";
import { Button, Icon, List } from "native-base";
import Layout from "../../hoc/Layout/Layout";
import {PlatformIcon} from "../../shared/utils";
import {ListView} from "react-native";
import Person from "./Person/Person";
import {Routes} from "../../shared/constants";

export const people: IPerson[] = [
    {
        id: 'asd',
        givenName: 'John',
        familyName: 'Smith',
        registeredAt: 28000000,
        profilePicture: { uri: 'https://pbs.twimg.com/profile_images/834093730244079616/0um-zqxI_400x400.jpg' },
        email: 'anon@tor.com',
        phone: 'no way',
        address: 'Somewhere hidden',
        birthday: 3123213123
    },
    {
        id: 'qrt',
        givenName: 'Jane',
        familyName: 'Smith',
        registeredAt: 58000000,
        profilePicture: { uri: 'https://usercontent2.hubstatic.com/14052231_f520.jpg' }
    }
];

class People extends React.Component<NavProp> {
    private readonly source = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    render() {
        const { navigation } = this.props;
        return (
            <Layout navigation={navigation} title="People">
                <List
                    dataSource={this.source.cloneWithRows(people)}
                    rightOpenValue={-75}
                    disableRightSwipe
                    renderRightHiddenRow={person => (
                        <Button full info onPress={() => {
                            navigation.navigate(Routes.PROFILE, { person });
                        }}>
                            <Icon name={PlatformIcon('person')}/>
                        </Button>
                    )}
                    renderRow={person => <Person person={person} navigation={navigation} />}
                />
            </Layout>
        );
    }
}

export default People;