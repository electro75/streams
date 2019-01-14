import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../Actions'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
            <div className="right floated content">
                <button className="ui button primary"> Edit </button>
                <button className="ui button negative"> Delete </button>
            </div>
            )
        } else {
            return null
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams : Object.values(state.streams),      // Object.values is an inbuilt JS function that turns all the values into an array
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);