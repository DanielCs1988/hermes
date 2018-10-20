import * as React from 'react';
import {Button, Col, Icon, Row, Text} from "native-base";
import Layout from "../../../hoc/Layout/Layout";
import {IForm, NavProp, IPerson} from "../../../shared/models";
import {PlatformIcon} from "../../../shared/utils";
import {Image} from "react-native";
import ProfileUpdateForm from "./Form/ProfileUpdateForm";
import {ProfileUpdateDispatchers} from "./ProfileUpdateContainer";

const formDefault = {
    value: '',
    valid: false
};
const initialState = {
    givenName: {...formDefault},
    familyName: {...formDefault},
    email: {...formDefault},
    phone: {...formDefault},
    address: {...formDefault},
    birthday: {
        value: 0,
        valid: false
    }
};
type State = Readonly<IForm>;
type Props = NavProp & ProfileUpdateDispatchers & {
    profile: IPerson | null;
}
class ProfileUpdate extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const person = props.profile || {};
        this.state = {
            ...initialState,
            ...Object.keys(person)
                .map(key => ({
                    [key]: {
                        ...formDefault,
                        value: person[key]
                    }
                }))
                .reduce((a, b) => ({...a, ...b}), {})
        };
    }

    private changeHandler = (inputName: string, newValue: string) => {
        this.setState(prevState => ({
            [inputName]: {
                ...prevState[inputName],
                value: newValue,
                valid: newValue.trim().length > 0
            }
        }));
    };

    private birthdayChangeHandler = (newBirthday: Date) => {
        this.setState(prevState => ({
            birthday: {
                ...prevState.birthday,
                value: newBirthday.getTime()
            }
        }));
    };

    private submitHandler = () => {
        if (this.checkValidity()) {
            const updatedProfile = Object.keys(this.state)
                .map(key => ({
                    [key]: this.state[key].value
                }))
                .reduce((a, b) => ({...a, ...b}), {});
            this.props.updateProfile({
                ...this.props.profile!,
                ...updatedProfile
            });
        }
    };

    private checkValidity = () => {
        return Object.values(this.state)
            .map(field => field.valid)
            .every(valid => valid);
    };

    render() {
        const { navigation, profile } = this.props;
        return (
            <Layout navigation={navigation} title="Update Profile" back>
                <Row>
                    <Col>
                        <Button full success onPress={this.submitHandler}>
                            <Icon name={PlatformIcon('checkmark')}/>
                            <Text>Save</Text>
                        </Button>
                    </Col>
                    <Col>
                        <Button full danger onPress={() => navigation.goBack()}>
                            <Icon name={PlatformIcon('close')}/>
                            <Text>Cancel</Text>
                        </Button>
                    </Col>
                </Row>
                {
                    profile && <Row>
                        <Col>
                            <Image source={profile.profilePicture} style={{ height: 150, width: '100%' }} />
                        </Col>
                        <Col style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Button iconLeft info bordered
                                    style={{ alignSelf: 'center' }}
                                    onPress={() => alert('Update image...')}>
                                <Icon name={PlatformIcon('brush')} />
                                <Text>Change Picture</Text>
                            </Button>
                        </Col>
                    </Row>
                }
                <ProfileUpdateForm
                    fields={this.state}
                    changeHandler={this.changeHandler}
                    birthdayChangeHandler={this.birthdayChangeHandler}
                />
            </Layout>
        );
    }
}

export default ProfileUpdate;