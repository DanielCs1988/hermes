import * as React from 'react';
import {Icon, Input, Item, Label} from "native-base";
import {InputProps, LabelType} from "../../types";

type Props = InputProps & {
    onChange: (value: string) => void;
}
const TextInput = ({ value, valid, onChange, label, config }: Props) => (
    <Item success={valid}
          fixedLabel={label && label.type === LabelType.Fixed}
          floatingLabel={label && label.type === LabelType.Floating}
          inlineLabel={label && label.type === LabelType.Inline}
          stackedLabel={label && label.type === LabelType.Stacked}>
        { label && <Label>{label}</Label> }
        <Input value={value} onChangeText={onChange} { ...config } />
        <Icon name="checkmark-circle" />
    </Item>
);

export default TextInput;