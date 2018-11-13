import * as React from 'react';
import { InputProps } from "../../types";
import { Textarea } from "native-base";

type Props = InputProps & {
    onChange: (value: string) => void;
    rowSpan?: number;
}
const TextareaField = ({ value, onChange, config, rowSpan = 5 }: Props) => (
    <Textarea
        style={{ width: '90%', marginHorizontal: '5%' }}
        value={value}
        onChangeText={onChange}
        rowSpan={rowSpan}
        // @ts-ignore
        bordered
        { ...config }
    />
);

export default TextareaField;