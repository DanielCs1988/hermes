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

type Props = NavProp & FetchedData & {
    people: IPerson[];
    fetchPeople: () => void;
};
class ProfileList extends React.Component<Props> {
    private readonly source = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    // componentDidMount() {
    //     runIf(!this.props.fetched, this.props.fetchPeople);
    // }

    render() {
        const { navigation, people, loading } = this.props;
        return (
            <Layout navigation={navigation} title="People">
                <Loader loading={loading}>
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
                        renderRow={person => <ProfileListItem person={person} navigation={navigation} />}
                    />
                </Loader>
            </Layout>
        );
    }
}

export default ProfileList;