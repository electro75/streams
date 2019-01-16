import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../Actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {

    onSubmit = (formValues) => {                  // called by redux-form's handleSubmit prop with the values in the fields
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, {createStream})(StreamCreate);