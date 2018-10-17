import * as React from 'react';
import {Button, Col, Icon, Row, Text} from "native-base";
import Layout from "../../../hoc/Layout/Layout";
import {IForm, NavProp, IPerson} from "../../../shared/models";
import {PlatformIcon} from "../../../shared/utils";
import {Image} from "react-native";
import ProfileForm from "./ProfileForm/ProfileForm";

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
class EditProfile extends React.Component<NavProp, State> {
    constructor(props: NavProp) {
        super(props);
        const person = props.navigation.getParam('person', {});
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
        alert('Form sent!');
    };

    render() {
        const { navigation } = this.props;
        const person: IPerson = navigation.getParam('person', {});
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
                <Row>
                    <Col>
                        <Image source={person.profilePicture} style={{ height: 150, width: '100%' }} />
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
                <ProfileForm
                    fields={this.state}
                    changeHandler={this.changeHandler}
                    birthdayChangeHandler={this.birthdayChangeHandler}
                />
            </Layout>
        );
    }
}

export default EditProfile;