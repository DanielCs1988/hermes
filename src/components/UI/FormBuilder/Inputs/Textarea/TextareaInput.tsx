import * as React from 'react';
import {InputProps, LabelType} from "../../types";
import {Item, Label, Textarea} from "native-base";

type Props = InputProps & {
    onChange: (value: string) => void;
    rowSpan?: number;
}
const TextareaField = ({ value, onChange, label, config, rowSpan = 5 }: Props) => (
    <Item
          fixedLabel={label && label.type === LabelType.Fixed}
          floatingLabel={label && label.type === LabelType.Floating}
          inlineLabel={label && label.type === LabelType.Inline}
          stackedLabel={label && label.type === LabelType.Stacked}>
        { label && <Label>{label}</Label> }
        <Textarea
            value={value}
            onChangeText={onChange}
            rowSpan={rowSpan}
            // @ts-ignore
            bordered
            { ...config }
        />
    </Item>
);

export default TextareaField;