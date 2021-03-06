import { USER_LOGGED_IN , USER_LOGGED_OUT} from "../actions/types";
const initialState = {
    authError: null
}
const authReducer = ( state = initialState , action={}) => {
    switch(action.type) {   
        case USER_LOGGED_IN:
            console.log("Login Success");
            return action.user
        case USER_LOGGED_OUT:
            return {};
        default:
            return state
    }   
}
export default authReducer;