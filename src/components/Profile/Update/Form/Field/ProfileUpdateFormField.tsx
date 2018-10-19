import * as React from 'react';
import {IFormField} from "../../../../../shared/models";
import {Icon, Input, Item, Label} from "native-base";

type Props = {
    field: IFormField;
    label: string;
    handler: (newValue: string) => void;
    inputProps?: any;
};
const ProfileUpdateFormField = ({ field, label, handler, inputProps }: Props) => (
    <Item floatingLabel success={field.valid}>
        <Label>{label}</Label>
        <Input
            value={field.value}
            onChangeText={handler}
            autoCorrect={false}
            { ...inputProps }
        />
        <Icon name="checkmark-circle" />
    </Item>
);

export default ProfileUpdateFormField;