const initState = {
    authError: null
}

const authReducer = (state=initState , action) => {
    switch(action.type) {
        
        case "LOGIN_SUCCESS":
            console.log("Login Success");
            return state
        default:
            return state
    }
    
}

export default authReducer;