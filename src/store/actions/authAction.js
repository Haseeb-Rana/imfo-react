import  {USER_LOGGED_IN , USER_LOGGED_OUT} from './types';
import setAuthorizationHeader from '../../utils/setAuthorizationHeader'

import api from '../../api'

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = user => ({
    type: USER_LOGGED_OUT 
});

export const signIn = (credentials) => 
    dispatch => { 
        return api.user.login(credentials).then(user => {
            const token = user.token;
            localStorage.setItem('IMFO-TOKEN', token);
            setAuthorizationHeader(user.token)
            dispatch(userLoggedIn(user));
        })
        
}

export const signOut =() => 
dispatch => {
    localStorage.removeItem("IMFO-TOKEN");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
}

export const signUp = (newUser) => dispatch => {
    return api.user.signup(newUser).then(user => {
        const token = user.token;
            localStorage.setItem('IMFO-TOKEN', token);
            setAuthorizationHeader(user.token)
            dispatch(userLoggedIn(user));
    })
}


    