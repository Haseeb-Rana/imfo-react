import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import decode from 'jwt-decode'
import setAuthorizationHeader from './utils/setAuthorizationHeader'
import { userLoggedIn} from './store/actions/authAction'

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)));

if(localStorage.getItem('IMFO-TOKEN'))
{
    if(localStorage.getItem('IMFO-TOKEN') !== undefined){
    const payload = decode(localStorage.getItem('IMFO-TOKEN'));
    const user = {
        token: localStorage.getItem("IMFO-TOKEN"),
        email: payload.email
    }

    setAuthorizationHeader(localStorage.getItem("IMFO-TOKEN"))
    store.dispatch(userLoggedIn(user));
}
else {
    localStorage.removeItem('IMFO-TOKEN');
}

}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
console.disableYellowBox = true