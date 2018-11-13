import * as React from 'react';
import {Icon, Input, Item, Label} from "native-base";
import {InputProps, LabelType} from "../../types";
import {View} from "react-native";

type Props = InputProps & {
    onChange: (value: string) => void;
}
const TextInput = ({ value, valid, onChange, label, config }: Props) => (
    <View style={{ width: '90%', marginHorizontal: '5%', marginTop: label && 13 }}>
        <Item success={valid}
              fixedLabel={label && label.type === LabelType.Fixed}
              floatingLabel={label && label.type === LabelType.Floating}
              inlineLabel={label && label.type === LabelType.Inline}
              stackedLabel={label && label.type === LabelType.Stacked}>
            { label && <Label>{label.text}</Label> }
            <Input
                value={value}
                onChangeText={onChange}
                { ...config }
            />
            <Icon name="checkmark-circle" />
        </Item>
    </View>
);

export default TextInput;