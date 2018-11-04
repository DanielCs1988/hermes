import * as React from 'react';
import {IEvent, NavProp} from "../../../shared/models";
import Layout from "../../../hoc/Layout/Layout";
import {Button, Text} from "native-base";
import {chooseBetween} from "../../../shared/utils";
import {EventFormDispatchers} from "./EventFormContainer";
import {Routes} from "../../../shared/constants";
import FormBuilder from "../../UI/FormBuilder/FormBuilder";
import {FormFieldConfig, FormFieldType} from "../../UI/FormBuilder/types";
import {createRef} from "react";

type Props = NavProp & EventFormDispatchers & {
    event: IEvent | null;
};
class EventForm extends React.Component<Props> {
    private readonly form = createRef<FormBuilder>();

    private submitHandler = () => {
        const event = this.form.current.submitForm();
        if (event) {
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

    render() {
        const event = this.props.event || {} as IEvent;
        const { title, description, from, to, image, location } = event;
        const isNewEvent = !this.props.event;

        const FormConfig: FormFieldConfig[] = [
            {
                type: FormFieldType.Image,
                name: 'image',
                defaultValue: image,
                validation: { required: true }
            },
            {
                type: FormFieldType.Text,
                name: 'title',
                defaultValue: title,
                validation: { minLength: 1 },
                config: {
                    placeholder: 'Name of the event'
                }
            },
            {
                type: FormFieldType.DateTime,
                name: 'from',
                defaultValue: from,
                validation: { required: true },
                config: {
                    datePlaceholder: 'Beginning date',
                    timePlaceholder: 'Begins at',
                    showIcon: true
                }
            },
            {
                type: FormFieldType.DateTime,
                name: 'to',
                defaultValue: to,
                validation: { required: true },
                config: {
                    datePlaceholder: 'Ending date',
                    timePlaceholder: 'Ends at',
                    minimumDate: from
                }
            },
            {
                type: FormFieldType.Location,
                name: 'location',
                defaultValue: location,
                validation: { required: true }
            },
            {
                type: FormFieldType.TextArea,
                name: 'description',
                defaultValue: description,
                config: {
                    placeholder: 'Details...'
                }
            }
        ];

        return (
            <Layout back padded
                navigation={this.props.navigation}
                title={ isNewEvent ? 'New Event' : title }
                footer={
                    <Button full style={{ margin: 5 }} onPress={this.submitHandler}>
                        <Text>{ isNewEvent ? 'Create' : 'Update' }</Text>
                    </Button>
                }>
                <FormBuilder config={FormConfig} ref={this.form} />
            </Layout>
        );
    }
}

export default EventForm;