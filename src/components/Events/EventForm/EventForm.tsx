import * as React from 'react';
import {Event, NavProp} from "../../../shared/models";
import EventTimePicker from "../../UI/DateTimePicker/EventTimePicker";
import LocationPicker from "../../UI/LocationPicker/LocationPicker";
import ImagePickerForm from "../../UI/ImagePickerForm/ImagePickerForm";
import Layout from "../../../hoc/Layout/Layout";
import {Button, Input, Item, Text, Textarea} from "native-base";
import {chooseBetween} from "../../../shared/utils";

const initialState = {
    title: null,
    description: '',
    from: null,
    to: null,
    image: null,
    location: null,
    isNewEvent: false
};
type Props = NavProp & {
    onNewEvent: (event: Event) => void;
    onUpdateEvent: (event: Event) => void;
}
class EventForm extends React.Component<Props, any> {
    constructor(props) {
        super(props);
        const event: Event = props.navigation.getParam('event', {});
        this.state = {
            ...initialState,
            ...event,
            isNewEvent: event.title === undefined
        };
    }

    private submitHandler = () => {
        if (this.validateForm()) {
            const { isNewEvent, ...event } = this.state;
            chooseBetween(
                this.state.isNewEvent,
                ({ image: { uri }, ...rest }) => alert(JSON.stringify({ ...rest, uri }, undefined, 4)),
                ({ image: { uri }, ...rest }) => alert(JSON.stringify({ ...rest, uri }, undefined, 4)),
                // this.props.onNewEvent,
                // this.props.onUpdateEvent,
                event
            );
        }
    };

    private validateForm = () => {
        return Object.values(this.state).every(val => val !== null) &&
            this.state.title.trim().length > 0;
    };

    render() {
        const { title, description, from, to, image, location, isNewEvent } = this.state;
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
                <EventTimePicker
                    showIcon
                    value={ from ? new Date(from) : undefined }
                    datePlaceholder="Beginning date"
                    timePlaceholder="Begins at"
                    onDateTimePicked={from => this.setState({ from: from.getTime() })}
                />
                <EventTimePicker
                    value={ to ? new Date(to) : undefined }
                    datePlaceholder="Ending date"
                    timePlaceholder="Ends at"
                    minimumDate={ from ? new Date(from) : undefined }
                    onDateTimePicked={to => this.setState({ to: to.getTime() })}
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