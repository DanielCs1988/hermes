import * as React from 'react';
import {FormFieldProps, FormFieldType} from "../types";
import LocationPicker from "../Inputs/LocationPicker/LocationPicker";
import ImagePickerForm from "../Inputs/ImagePickerForm/ImagePickerForm";
import TextInput from "../Inputs/Text/TextInput";
import TextareaField from "../Inputs/Textarea/TextareaInput";
import DateTimePickerInput from "../Inputs/DateTimePicker/DateTimePickerInput";

const FormBuilderField = ({ type, value, valid, onChange, label, config }: FormFieldProps) => {
    switch (type) {
        case FormFieldType.Text:
            return <TextInput value={value} valid={valid} onChange={onChange} label={label} { ...config } />;
        case FormFieldType.TextArea:
            return <TextareaField value={value} valid={valid} onChange={onChange} { ...config } />;
        case FormFieldType.Location:
            return <LocationPicker value={value} onLocationPicked={onChange} { ...config } />;
        case FormFieldType.Image:
            return <ImagePickerForm value={value} onImagePicked={onChange} { ...config } />;
        case FormFieldType.DateTime:
            return <DateTimePickerInput onDateTimePicked={onChange} value={value} { ...config } />;
        default:
            return null;
    }
};

export default FormBuilderField;