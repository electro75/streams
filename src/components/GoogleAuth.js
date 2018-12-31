import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '55454743109-3tps1es861h4ifofokakbdlmjdvikkcn.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state === null) {
            return null
        } else if(this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOut} >
                    <i className="google icon"></i>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignIn}>
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

export default GoogleAuth;