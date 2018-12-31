const INITIALSTATE = {
    isSignedIn : null
}

export default (state = INITIALSTATE, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return {...state, isSignedIn: true}

        case 'SIGN_OUT':
            return {...state, isSignedIn: false}

        default:
            return state;
    }
};