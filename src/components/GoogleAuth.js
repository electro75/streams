import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../Actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '55454743109-3tps1es861h4ifofokakbdlmjdvikkcn.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null
        } else if(this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={() => { this.auth.signOut() }} >
                    <i className="google icon"></i>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui red google button" onClick={()=>{ this.auth.signIn() }}>
                    <i className="google icon" ></i>
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return <div>{ this.renderAuthButton() }</div>
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}


export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth) ;