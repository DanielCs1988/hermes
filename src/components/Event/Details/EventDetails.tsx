import * as React from 'react';
import {Button, H2, Icon, Text as NBText} from "native-base";
import {IEvent as IEvent, NavProp} from "../../../shared/models";
import Layout from "../../../hoc/Layout/Layout";
import {Text, View} from "react-native";
import { CachedImage } from 'react-native-cached-image';
import {PlatformIcon} from "../../../shared/utils";
import moment from 'moment';
import {Routes} from "../../../shared/constants";
import styles from "./EventDetails.styles";
import {EventDetailsDispatcher} from "./EventDetailsContainer";

type Props = NavProp & EventDetailsDispatcher & {
    event: IEvent;
    currentUser: string;
}
const EventDetails = ({ navigation, deleteEvent, toggleParticipation, event, currentUser }: Props) => {
    if (event) {
        const { id, image, title, location, from, to, description, organizer, participants } = event;
        const participating = !!participants.find(user => user.id === currentUser);
        return (
            <Layout navigation={navigation} title="Event Details" back>
                <CachedImage source={image!} style={{ height: 200, flex: 1, marginBottom: 10 }} />
                <View style={styles.row}>
                    <View style={styles.leftCol}>
                        <Text style={styles.monthAbbr}>{moment(from).format('MMM')}</Text>
                        <Text style={styles.dayAbbr}>{moment(from).format('D')}</Text>
                    </View>
                    <View style={styles.rightCol}>
                        <H2>{title}</H2>
                        <NBText note>Organizer: {organizer.givenName} {organizer.familyName}</NBText>
                    </View>
                </View>
                <View style={[styles.row, styles.buttonGroup]}>
                    <Button rounded bordered success={!participating} danger={participating}
                            onPress={() => toggleParticipation(id)}>
                        <NBText>{ participating ? 'Not going' : 'Join' }</NBText>
                    </Button>
                    <Button rounded bordered
                            onPress={() => navigation.navigate(Routes.EDIT_EVENT)}>
                        <NBText>Update</NBText>
                    </Button>
                    <Button rounded bordered danger
                            onPress={() => {
                                deleteEvent(event);
                                navigation.goBack();
                            }}>
                        <NBText>Delete</NBText>
                    </Button>
                </View>
                <View style={styles.row}>
                    <View style={styles.leftCol}>
                        <Icon name={PlatformIcon('map')}/>
                    </View>
                    <View style={styles.rightCol}>
                        <H2>{location.name}</H2>
                    </View>
                </View>
                <View style={[styles.row, styles.thickBorder]}>
                    <View style={styles.leftCol}>
                        <Icon name={PlatformIcon('time')}/>
                    </View>
                    <View style={styles.rightCol}>
                        <NBText style={styles.dateText}>
                            From: {moment(from).format('dddd, YYYY. MMMM D. H:mm')}
                        </NBText>
                        <NBText style={styles.dateText}>
                            To: {moment(to).format('dddd, YYYY. MMMM D. H:mm')}
                        </NBText>
                    </View>
                </View>
                <NBText style={{ padding: 10 }}>Lots of people will be there!</NBText>
                <NBText style={{ padding: 10 }}>{description}</NBText>
            </Layout>
        );
    }
    return null;
};

export default EventDetails;