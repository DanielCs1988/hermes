import * as React from 'react';
import {DatePicker, Form, Item} from "native-base";
import FormField from "./FormField/FormField";

type Props = {
    fields: any;
    changeHandler: (fieldName: string, newValue: string) => void;
    birthdayChangeHandler: (date: Date) => void;
};
const ProfileForm = ({ fields, changeHandler, birthdayChangeHandler }: Props) => {
    const { givenName, familyName, email, phone, address } = fields;
    return (
        <Form>
            <FormField
                field={givenName}
                label="Given name"
                handler={val => changeHandler('givenName', val)}
            />
            <FormField
                field={familyName}
                label="Family name"
                handler={val => changeHandler('familyName', val)}
            />
            <FormField
                field={email}
                label="Email"
                handler={val => changeHandler('email', val)}
                inputProps={{
                    keyboardType: 'email-address',
                    autoCapitalize: 'none'
                }}
            />
            <FormField
                field={phone}
                label="Phone number"
                handler={val => changeHandler('phone', val)}
                inputProps={{ keyboardType: 'phone-pad' }}
            />
            <FormField
                field={address}
                label="Address"
                handler={val => changeHandler('address', val)}
            />
            <Item>
                <DatePicker
                    defaultDate={new Date()}
                    maximumDate={new Date()}
                    placeHolderText="Pick your birth date!"
                    onDateChange={birthdayChangeHandler}
                    animationType="slide"
                    androidMode="spinner"
                />
            </Item>
        </Form>
    );
};

export default ProfileForm;