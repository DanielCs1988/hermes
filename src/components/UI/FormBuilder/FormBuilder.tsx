import * as React from 'react';
import {FormProps, FormState} from "./types";
import {normalize} from "../../../shared/utils";
import FormBuilderField from "./Field/FormBuilderField";
import {validate} from "./form-validation";

class FormBuilder extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);
        // TODO: TEST if not making it null breaks the component
        this.state = normalize(props.config, 'name', ({ defaultValue, validation }) => ({
            value: defaultValue ? defaultValue : null,
            valid: validate(defaultValue, validation),
            rules: validation ? validation : null
        }));
    }

    private changeHandler = (name: string, value) => {
        this.setState(prevState => ({
            [name]: {
                ...prevState[name],
                value,
                valid: validate(value, prevState[name].rules)
            }
        }));
    };

    private checkFormValidity = () => {
        return Object.values(this.state)
            .map(field => field.valid)
            .every(valid => valid);
    };

    submitForm = () => {
        if (!this.checkFormValidity()) {
            return null;
        }
        const data = {};
        Object.keys(this.state).forEach(name => {
            data[name] = this.state[name].value;
        });
        return data;
    };

    render() {
        const { config } = this.props;
        return (
            <>{
                config.map(({ type, name, label, config }) => (
                    <FormBuilderField
                        key={name}
                        type={type}
                        value={this.state[name].value}
                        valid={this.state[name].valid}
                        label={label}
                        config={config}
                        onChange={val => this.changeHandler(name, val)}
                    />
                ))
            }</>
        );
    }
}

export default FormBuilder;