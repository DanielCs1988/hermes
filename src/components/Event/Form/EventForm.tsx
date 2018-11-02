import * as React from 'react';
import {IEvent, NavProp} from "../../../shared/models";
import DateTimePickerInput from "../../UI/FormBuilder/Inputs/DateTimePicker/DateTimePickerInput";
import LocationPicker from "../../UI/FormBuilder/Inputs/LocationPicker/LocationPicker";
import ImagePickerForm from "../../UI/FormBuilder/Inputs/ImagePickerForm/ImagePickerForm";
import Layout from "../../../hoc/Layout/Layout";
import {Button, Input, Item, Text, Textarea} from "native-base";
import {chooseBetween} from "../../../shared/utils";
import {EventFormDispatchers} from "./EventFormContainer";
import {Routes} from "../../../shared/constants";

const initialState = {
    title: null,
    description: '',
    from: null,
    to: null,
    image: null,
    location: null
};
type Props = NavProp & EventFormDispatchers & {
    event: IEvent | null;
};
class EventForm extends React.Component<Props, any> {
    constructor(props) {
        super(props);
        const event = props.event || {};
        this.state = {
            ...initialState,
            ...event
        };
    }

    private submitHandler = () => {
        if (this.validateForm()) {
            const event = { ...this.state };
            chooseBetween(
                this.props.event,  // This is null (thus false) when creating a new event.
                this.props.updateEvent,
                this.props.createEvent,
                event
            );
            this.props.navigation.popToTop({ immediate: true });
            this.props.navigation.navigate(Routes.EVENT_DETAILS);
        }
    };

    private validateForm = () => {
        return Object.values(this.state).every(val => val !== null) &&
            this.state.title.trim().length > 0 &&
            this.state.location.name.trim().length > 0;
    };

    render() {
        const { title, description, from, to, image, location } = this.state;
        const isNewEvent = !this.props.event;
        return (
            <Layout back
                navigation={this.props.navigation}
                title={ isNewEvent ? 'New Event' : title }
                footer={
                    <Button full style={{ margin: 5 }} onPress={this.submitHandler}>
                        <Text>{ isNewEvent ? 'Create' : 'Update' }</Text>
                    </Button>
                }>
                <ImagePickerForm
                    value={image}
                    onImagePicked={image => this.setState({ image })}
                />
                <Item>
                    <Input
                        style={{ width: '90%', marginHorizontal: '5%' }}
                        placeholder="Name of the event"
                        value={title}
                        onChangeText={title => this.setState({ title })}
                    />
                </Item>
                <DateTimePickerInput
                    showIcon
                    value={ from ? new Date(from) : undefined }
                    datePlaceholder="Beginning date"
                    timePlaceholder="Begins at"
                    onDateTimePicked={from => this.setState({ from })}
                />
                <DateTimePickerInput
                    value={ to ? new Date(to) : undefined }
                    datePlaceholder="Ending date"
                    timePlaceholder="Ends at"
                    minimumDate={ from ? new Date(from) : undefined }
                    onDateTimePicked={to => this.setState({ to })}
                />
                <LocationPicker
                    value={location}
                    onLocationPicked={location => this.setState({ location })}
                />
                <Textarea
                    value={description}
                    rowSpan={5}
                    // @ts-ignore
                    bordered
                    style={{ margin: 5 }}
                    placeholder="Details..."
                    onChangeText={description => this.setState({ description })}
                />
            </Layout>
        );
    }
}

export default EventForm;