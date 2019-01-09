import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../Actions';

class StreamCreate extends Component {

    renderError({error, touched}) {
        if(error && touched) {
            return (
                <div className="ui error message">
                    <div className="header" >
                        {error}
                    </div>
                </div>
            );
        } else {
            return null;
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

    onSubmit = (formValues) => {                  // called by redux-form's handleSubmit prop with the values in the fields
        // console.log(formValues);
        this.props.createStream(formValues);
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


const formWrapped =  reduxForm({
    validate,
    form: 'streamCreate'            // usually named after the purpose of the form
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);