import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '55454743109-3tps1es861h4ifofokakbdlmjdvikkcn.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.api2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            })
        });
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div>status not known</div>
        } else if(this.state.isSignedIn) {
            return <div>Authenticated</div>
        } else {
            return <div>Unauthenticated</div>
        }
    }

    render() {
        return <div>{ this.renderAuthButton() }</div>
    }
}

export default GoogleAuth;