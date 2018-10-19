import * as React from 'react';
import {Container, DeckSwiper, Fab, Icon} from "native-base";
import EventListItem from "./Item/EventListItem";
import NavBar from "../../UI/NavBar/NavBar";
import {View} from "react-native";
import {PlatformIcon, runIf} from "../../../shared/utils";
import {Routes} from "../../../shared/constants";
import {NavProp} from "../../../shared/models";
import {EventState} from "../../../store/types";
import Loader from "../../../hoc/Loader/Loader";

type Props = NavProp & EventState & {
    fetchEvents: () => void;
};
class EventList extends React.Component<Props> {
    componentDidMount() {
        runIf(!this.props.fetched, this.props.fetchEvents);
    }

    render() {
        const { navigation, events, loading } = this.props;
        return (
            <Container>
                <NavBar navigation={navigation} title="Events" />
                <View style={{ padding: 10 }}>
                    <Loader loading={loading}>
                    {
                        events.length > 0 &&
                        <DeckSwiper
                            dataSource={events}
                            renderItem={event => (
                                <EventListItem
                                    event={event}
                                    navigation={navigation}
                                />
                            )}
                        />
                    }
                    </Loader>
                </View>
                <Fab onPress={() => navigation.navigate(Routes.NEW_EVENT)} position="bottomRight">
                    <Icon name={PlatformIcon('create')} />
                </Fab>
            </Container>
        );
    }
}

export default EventList;