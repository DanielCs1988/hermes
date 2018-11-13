import * as React from 'react';
import {createRef} from 'react';
import {Button, Text} from "native-base";
import Layout from "../../../hoc/Layout/Layout";
import {IPerson, NavProp} from "../../../shared/models";
import {runIf} from "../../../shared/utils";
import {ProfileFormDispatchers} from "./ProfileFormContainer";
import FormBuilder from "../../UI/FormBuilder/FormBuilder";
import {FormFieldConfig, FormFieldType, LabelType} from "../../UI/FormBuilder/types";
import moment from "moment";

type Props = NavProp & ProfileFormDispatchers & {
    profile: IPerson;
}
class ProfileForm extends React.Component<Props> {
    private readonly form = createRef<FormBuilder>();

    private submitHandler = () => {
        const profile = this.form.current.submitForm();
        runIf(profile, this.props.updateProfile, profile);
        this.props.navigation.goBack();
    };

    render() {
        const {
            navigation,
            profile: { profilePicture, givenName, familyName, email, phone, address, birthday }
        } = this.props;

        const FormConfig: FormFieldConfig[] = [
            {
                type: FormFieldType.Image,
                name: 'profilePicture',
                defaultValue: profilePicture,
                validation: { required: true }
            },
            {
                type: FormFieldType.Text,
                name: 'givenName',
                defaultValue: givenName,
                validation: { minLength: 1 },
                label: {
                    text: 'First name',
                    type: LabelType.Floating
                }
            },
            {
                type: FormFieldType.Text,
                name: 'familyName',
                defaultValue: familyName,
                validation: { minLength: 1 },
                label: {
                    text: 'Last name',
                    type: LabelType.Floating
                }
            },
            {
                type: FormFieldType.Email,
                name: 'email',
                defaultValue: email,
                label: {
                    text: 'Email',
                    type: LabelType.Floating
                }
            },
            {
                type: FormFieldType.Number,
                name: 'phone',
                defaultValue: phone,
                label: {
                    text: 'Phone number',
                    type: LabelType.Floating
                }
            },
            {
                type: FormFieldType.Text,
                name: 'address',
                defaultValue: address,
                label: {
                    text: 'Address',
                    type: LabelType.Floating
                }
            },
            {
                type: FormFieldType.Date,
                name: 'birthday',
                defaultValue: birthday,
                config: {
                    datePlaceholder: birthday && moment(birthday).format('l')
                }
            }
        ];

        return (
            <Layout back
                navigation={navigation}
                title="Update Profile"
                footer={
                    <Button full style={{ margin: 5 }} onPress={this.submitHandler}>
                        <Text>Update Profile</Text>
                    </Button>
                }>
                <FormBuilder config={FormConfig} ref={this.form} />
            </Layout>
        );
    }
}

export default ProfileForm;