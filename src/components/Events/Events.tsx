import * as React from 'react';
import {Container, DeckSwiper, Fab, Icon} from "native-base";
import Event from "./Event/Event";
import NavBar from "../UI/NavBar/NavBar";
import {View} from "react-native";
import {PlatformIcon, runIf, showErrorMessage} from "../../shared/utils";
import {Routes} from "../../shared/constants";
import {NavProp} from "../../shared/models";
import {EventState} from "../../store/types";
import Loader from "../../hoc/Loader/Loader";

type Props = NavProp & EventState & {
    fetchEvents: () => void;
};
class Events extends React.Component<Props> {
    componentDidMount() {
        runIf(!this.props.fetched, this.props.fetchEvents);
    }

    componentDidUpdate() {
        const { error } = this.props;
        runIf(error, showErrorMessage, error);
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
                                <Event
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

export default Events;