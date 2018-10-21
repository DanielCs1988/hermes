import * as React from 'react';
import {Container, DeckSwiper, Fab, Icon} from "native-base";
import EventListItem from "./Item/EventListItem";
import NavBar from "../../UI/NavBar/NavBar";
import {View} from "react-native";
import {PlatformIcon, runIf} from "../../../shared/utils";
import {IEvent, NavProp} from "../../../shared/models";
import {FetchedData} from "../../../store/types";
import Loader from "../../../hoc/Loader/Loader";
import {EventListDispatchers} from "./EventListContainer";
import WithGlobalState from "../../../hoc/WithErrorHandling/WithErrorHandling";
import {Routes} from "../../../shared/constants";

type Props = NavProp & FetchedData & EventListDispatchers & {
    events: IEvent[];
    currentUser: string;
};

class EventList extends React.Component<Props> {
    componentDidMount() {
        runIf(!this.props.fetched, this.props.fetchEvents);
    }

    render() {
        const { navigation, events, loading, initForm, selectEvent, toggleParticipation, currentUser } = this.props;
        return (
            <WithGlobalState>
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
                                            onSelect={() => {
                                                selectEvent(event);
                                                navigation.navigate(Routes.EVENT_DETAILS);
                                            }}
                                            onChangeParticipation={() => toggleParticipation(event.id)}
                                            participating={event.participants.find(
                                                user => user.id === currentUser
                                            )}
                                        />
                                    )}
                                />
                            }
                        </Loader>
                    </View>
                    <Fab onPress={() => {
                        initForm();
                        navigation.navigate(Routes.NEW_EVENT);
                    }} position="bottomRight">
                        <Icon name={PlatformIcon('create')} />
                    </Fab>
                </Container>
            </WithGlobalState>
        );
    }
}

export default EventList;