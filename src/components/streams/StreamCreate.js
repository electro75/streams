import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

    renderError({error, touched}) {
        if(touched) {
            return (
                <div className="ui error message">
                    <div className="header" >
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {        //uses destructring to get ths input key out of the formProps object.
        const className = `field ${meta.error && meta.touched? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>   
                {this.renderError(meta)}
            </div>
            
        )
    }

    onSubmit(formValues) {                  // called by redux-form's handleSubmit prop with the values in the fields
        // console.log(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Give your Stream a Title"/>
                <Field name="description" component={this.renderInput} label="Describe your Stream!"/>
                <button className="ui button primary" >Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = 'You must add a title!'
    }

    if(!formValues.description) {
        errors.description = 'You must add a description'
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'streamCreate'            // usually named after the purpose of the form
})(StreamCreate);