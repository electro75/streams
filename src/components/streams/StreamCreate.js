import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

    renderInput({input, label}) {             //uses destructring to get ths input key out of the formProps object.
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input}/>   
            </div>
            
        )
    }

    render() {
        return (
            <form className="ui form" >
                <Field name="title" component={this.renderInput} label="Give your Stream a title"/>
                <Field name="description" component={this.renderInput} label="Describe your Stream!"/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'            // usually named after the purpose of the form
})(StreamCreate);