import * as React from 'react';
import {Button, Card, Col, Grid, H1, H3, Icon, Row, Text} from "native-base";
import Layout from "../../../hoc/Layout/Layout";
import {NavProp, Person} from "../../../shared/models";
import {Image} from "react-native";
import PersonDetail from "./PersonDetail/PersonDetail";
import {PlatformIcon} from "../../../shared/utils";
import {Routes} from "../../../shared/constants";

const Profile = ({ navigation }: NavProp) => {
    const person: Person = navigation.getParam('person', {});
    return (
        <Layout navigation={navigation} title={`${person.givenName} ${person.familyName}`} back>
            <Grid>
                <Row>
                    <Col>
                        <Image source={person.profilePicture} style={{ height: 150, width: '100%' }} />
                    </Col>
                    <Col style={{ alignItems: 'center' }}>
                        <H3>{`${person.givenName} ${person.familyName}`}</H3>
                        <Button iconLeft info bordered
                                style={{ alignSelf: 'center', marginTop: 10 }}
                                onPress={() => navigation.navigate(Routes.EDIT_PROFILE, { person })}>
                            <Icon name={PlatformIcon('settings')} />
                            <Text>Update Profile</Text>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Card style={{ width: '100%', padding: 10 }}>
                        {
                            person.email || person.phone || person.address || person.birthday ?
                                <>
                                    <PersonDetail icon="mail" content={person.email} />
                                    <PersonDetail icon="phone-portrait" content={person.phone} />
                                    <PersonDetail icon="home" content={person.address} />
                                    <PersonDetail icon="calendar" date={person.birthday} />
                                </> :
                                <H1 style={{ alignSelf: 'center' }}>No profile info to see here!</H1>
                        }

                    </Card>
                </Row>
            </Grid>
        </Layout>
    );
};
export default Profile;