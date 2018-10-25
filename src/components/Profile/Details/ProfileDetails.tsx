import * as React from 'react';
import {Button, Card, Col, Grid, H1, H3, Icon, Row, Spinner, Text} from "native-base";
import Layout from "../../../hoc/Layout/Layout";
import {IPerson, NavProp} from "../../../shared/models";
import { CachedImage } from 'react-native-cached-image';
import PersonDetailsInfoItem from "./InfoItem/PersonDetailsInfoItem";
import {PlatformIcon} from "../../../shared/utils";
import {Routes} from "../../../shared/constants";
import {AppState} from "../../../store/types";
import {connect} from "react-redux";

type Props = NavProp & {
    person: IPerson | null;
}
const ProfileDetails = ({ navigation, person }: Props) => {
    if (person) {
        return (
            <Layout navigation={navigation} title={`${person.givenName} ${person.familyName}`} back>
                <Grid>
                    <Row>
                        <Col>
                            <CachedImage
                                source={{ uri: person.profilePicture }}
                                style={{ height: 150, width: '100%' }} />
                        </Col>
                        <Col style={{ alignItems: 'center' }}>
                            <H3>{`${person.givenName} ${person.familyName}`}</H3>
                            <Button iconLeft info bordered
                                    style={{ alignSelf: 'center', marginTop: 10 }}
                                    onPress={() => navigation.navigate(Routes.EDIT_PROFILE)}>
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
                                        <PersonDetailsInfoItem icon="mail" content={person.email} />
                                        <PersonDetailsInfoItem icon="phone-portrait" content={person.phone} />
                                        <PersonDetailsInfoItem icon="home" content={person.address} />
                                        <PersonDetailsInfoItem icon="calendar" date={person.birthday} />
                                    </> :
                                    <H1 style={{ alignSelf: 'center' }}>No profile info to see here!</H1>
                            }

                        </Card>
                    </Row>
                </Grid>
            </Layout>
        );
    }
    return <Spinner color="green" />;
};

const mapStateToProps = ({ people: { selectedProfile } }: AppState) => ({ person: selectedProfile });

export default connect(mapStateToProps)(ProfileDetails);