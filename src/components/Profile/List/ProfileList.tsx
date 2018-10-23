import * as React from 'react';
import {IPerson, NavProp} from "../../../shared/models";
import { Button, Icon, List } from "native-base";
import Layout from "../../../hoc/Layout/Layout";
import {PlatformIcon} from "../../../shared/utils";
import {ListView} from "react-native";
import ProfileListItem from "./Item/ProfileListItem";
import {Routes} from "../../../shared/constants";
import Loader from "../../../hoc/Loader/Loader";
import {FetchedData} from "../../../store/types";
import {ProfileListDispatchers} from "./ProfileListContainer";

type Props = NavProp & FetchedData & ProfileListDispatchers & {
    people: IPerson[];
};
class ProfileList extends React.Component<Props> {
    private readonly source = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    render() {
        const { navigation, people, loading, selectProfile, selectTarget } = this.props;
        return (
            <Layout navigation={navigation} title="People">
                <Loader loading={loading}>
                    <List
                        dataSource={this.source.cloneWithRows(people)}
                        rightOpenValue={-75}
                        disableRightSwipe
                        renderRightHiddenRow={person => (
                            <Button info onPress={() => {
                                selectProfile(person);  // TODO: RACE CONDITION!
                                navigation.navigate(Routes.PROFILE);
                            }}>
                                <Icon name={PlatformIcon('person')}/>
                            </Button>
                        )}
                        renderRow={person => <ProfileListItem
                            person={person}
                            navigation={navigation}
                            onSelect={() => selectTarget(person)}
                        />}
                    />
                </Loader>
            </Layout>
        );
    }
}

export default ProfileList;