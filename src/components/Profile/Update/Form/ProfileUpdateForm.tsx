import * as React from 'react';
import {DatePicker, Form, Item} from "native-base";
import ProfileUpdateFormField from "./Field/ProfileUpdateFormField";
import moment from "moment";

type Props = {
    fields: any;
    changeHandler: (fieldName: string, newValue: string) => void;
    birthdayChangeHandler: (date: Date) => void;
};
const ProfileUpdateForm = ({ fields, changeHandler, birthdayChangeHandler }: Props) => {
    const { givenName, familyName, email, phone, address, birthday } = fields;
    const birthdayValue = birthday.value > 0 ? moment(birthday.value).format('l') : null;
    return (
        <Form>
            <ProfileUpdateFormField
                field={givenName}
                label="Given name"
                handler={val => changeHandler('givenName', val)}
            />
            <ProfileUpdateFormField
                field={familyName}
                label="Family name"
                handler={val => changeHandler('familyName', val)}
            />
            <ProfileUpdateFormField
                field={email}
                label="Email"
                handler={val => changeHandler('email', val)}
                inputProps={{
                    keyboardType: 'email-address',
                    autoCapitalize: 'none'
                }}
            />
            <ProfileUpdateFormField
                field={phone}
                label="Phone number"
                handler={val => changeHandler('phone', val)}
                inputProps={{ keyboardType: 'phone-pad' }}
            />
            <ProfileUpdateFormField
                field={address}
                label="Address"
                handler={val => changeHandler('address', val)}
            />
            <Item>
                <DatePicker
                    defaultDate={birthdayValue && new Date(birthdayValue) || new Date()}
                    maximumDate={new Date()}
                    placeHolderText={birthdayValue || 'Pick your birth date!'}
                    onDateChange={birthdayChangeHandler}
                    animationType="slide"
                    androidMode="spinner"
                />
            </Item>
        </Form>
    );
};

export default ProfileUpdateForm;