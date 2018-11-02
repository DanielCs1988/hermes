import * as React from 'react';
import {View} from "react-native";
import {Button, Icon, Text} from "native-base";
import {PlatformIcon} from "../../../../../shared/utils";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

const initialState = {
    showDatePicker: false,
    showTimePicker: false,
    value: new Date(),
    datePicked: false,
    timePicked: false
};
type State = Readonly<typeof initialState>
type Props = {
    showIcon?: boolean;
    minimumDate?: Date;
    value?: Date;
    onDateTimePicked: (dateTime: number) => void;
    datePlaceholder?: string;
    timePlaceholder?: string;
}
class DateTimePickerInput extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        const valueProvided = props.value;
        this.state = {
            ...initialState,
            value: valueProvided ? props.value : initialState.value,
            datePicked: valueProvided,
            timePicked: valueProvided
        };
    }

    private closeDatePicker = () => {
        this.setState({ showDatePicker: false });
    };
    private openDatePicker = () => {
        this.setState({ showDatePicker: true });
    };

    private closeTimePicker = () => {
        this.setState({ showTimePicker: false });
    };
    private openTimePicker = () => {
        this.setState({ showTimePicker: true });
    };

    private datePickedHandler = (date) => {
        this.closeDatePicker();
        this.setState({ value: date, datePicked: true }, this.transmitDateTime);
    };
    private timePickedHandler = (time) => {
        this.closeTimePicker();
        this.setState({ value: time, timePicked: true }, this.transmitDateTime);
    };

    private transmitDateTime = () => {
        if (this.state.datePicked && this.state.timePicked) {
            this.props.onDateTimePicked(this.state.value.getTime());
        }
    };

    render() {
        const showIcon = this.props.showIcon ? this.props.showIcon : false;
        const { value, showDatePicker, showTimePicker, datePicked, timePicked } = this.state;
        const { datePlaceholder = 'Pick a date', timePlaceholder = 'Choose a time', minimumDate } = this.props;
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    { showIcon && <Icon name={PlatformIcon('time')}/>}
                </View>
                <View style={{ flex: 3 }}>
                    <Button transparent onPress={this.openDatePicker}>
                        <Text>
                            { datePicked ? moment(value).format('YYYY. MMM. D.') : datePlaceholder }
                        </Text>
                    </Button>
                </View>
                <View style={{ flex: 3 }}>
                    <Button transparent onPress={this.openTimePicker}>
                        <Text>
                            { timePicked ? moment(value).format('H:mm') : timePlaceholder }
                        </Text>
                    </Button>
                </View>
                <DateTimePicker
                    onConfirm={this.datePickedHandler}
                    onCancel={this.closeDatePicker}
                    mode="date"
                    minimumDate={minimumDate || new Date()}
                    date={value}
                    isVisible={showDatePicker}
                />
                <DateTimePicker
                    onConfirm={this.timePickedHandler}
                    onCancel={this.closeTimePicker}
                    mode="time"
                    minimumDate={minimumDate || new Date()}
                    date={value}
                    isVisible={showTimePicker}
                />
            </View>
        );
    }
}

export default DateTimePickerInput;