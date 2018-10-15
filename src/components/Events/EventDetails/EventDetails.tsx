import * as React from 'react';
import {Button, H2, Icon, Text as NBText} from "native-base";
import {Event as IEvent, NavProp} from "../../../shared/models";
import Layout from "../../../hoc/Layout/Layout";
import {Image, Text, View} from "react-native";
import {people} from "../../People/People";
import {PlatformIcon} from "../../../shared/utils";
import moment from 'moment';
import {Routes} from "../../../shared/constants";
import styles from "./EventDetails.styles";

const EventDetails = ({ navigation }: NavProp) => {
    const event: IEvent = navigation.getParam('event', {});
    const organizer = people[0];
    const { image, title, location, from, to, description } = event;
    return (
        <Layout navigation={navigation} title="Event Details" back>
            <Image source={image!} style={{ height: 200, flex: 1, marginBottom: 10 }} />
            <View style={styles.row}>
                <View style={styles.leftCol}>
                    <Text style={styles.monthAbbr}>Nov</Text>
                    <Text style={styles.dayAbbr}>18</Text>
                </View>
                <View style={styles.rightCol}>
                    <H2>{title}</H2>
                    <NBText note>Organizer: {organizer.givenName} {organizer.familyName}</NBText>
                </View>
            </View>
            <View style={[styles.row, styles.buttonGroup]}>
                <Button rounded bordered success
                        onPress={() => alert('Joined!')}>
                    <NBText>Join</NBText>
                </Button>
                <Button rounded bordered
                        onPress={() => navigation.navigate(Routes.EDIT_EVENT, { event })}>
                    <NBText>Update</NBText>
                </Button>
                <Button rounded bordered danger
                        onPress={() => alert('Deleted!')}>
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
                    <NBText>From: {moment(from).format('llll')}</NBText>
                    <NBText>To: {moment(to).format('llll')}</NBText>
                </View>
            </View>
            <NBText style={{ padding: 10 }}>Lots of people will be there!</NBText>
            <NBText style={{ padding: 10 }}>{description}</NBText>
        </Layout>
    );
};

export default EventDetails;