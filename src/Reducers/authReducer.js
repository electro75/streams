import {SIGN_IN, SIGN_OUT} from '../Actions/types';

const INITIALSTATE = {
    isSignedIn  : null,
    userId      : null
}

export default (state = INITIALSTATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload}

        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null}

        default:
            return state;
    }
};