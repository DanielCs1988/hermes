import * as React from 'react';
import {H2, H3, Icon, Text as NBText} from "native-base";
import {Event as IEvent, NavProp} from "../../../shared/models";
import Layout from "../../../hoc/Layout/Layout";
import {Image, Text, View} from "react-native";
import {people} from "../../People/People";
import {PlatformIcon} from "../../../shared/utils";
import moment from 'moment';

const EventDetails = ({ navigation }: NavProp) => {
    const event: IEvent = navigation.getParam('event', {});
    const organizer = people[0];
    const { image, title, location, from, to, description } = event;
    return (
        <Layout navigation={navigation} title="Event Details" back>
            <Image source={image!} style={{ height: 200, flex: 1, marginBottom: 10 }} />
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#aaa' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Nov</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>18</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <H2>{title}</H2>
                    <NBText note>Organizer: {organizer.givenName} {organizer.familyName}</NBText>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Icon name={PlatformIcon('locate')}/>
                <H3 style={{ marginLeft: 10 }}>{location.name}</H3>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 5, borderBottomColor: '#999' }}>
                <Icon name={PlatformIcon('time')}/>
                <View style={{ marginLeft: 10 }}>
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