import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../Actions'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        return <div>Streams</div>
    }
}

export default connect(null, {fetchStreams})(StreamList);