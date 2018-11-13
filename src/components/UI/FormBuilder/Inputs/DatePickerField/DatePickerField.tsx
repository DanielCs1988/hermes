import * as React from 'react';
import {View} from "react-native";
import {DatePicker, Icon} from "native-base";
import {PlatformIcon} from "../../../../../shared/utils";

type Props = {
    value?: number;
    onDatePicked: (date: number) => void;
    datePlaceholder?: string;
}
const DatePickerField = ({ value, onDatePicked, datePlaceholder = 'Pick a date' }: Props) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginHorizontal: '5%' }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Icon name={PlatformIcon('calendar')}/>
        </View>
        <View style={{ flex: 6 }}>
            <DatePicker
                defaultDate={value && new Date(value) || new Date()}
                maximumDate={new Date()}
                placeHolderText={datePlaceholder}
                onDateChange={date => onDatePicked(date.getTime())}
                animationType="slide"
                androidMode="spinner"
            />
        </View>
    </View>
);

export default DatePickerField;