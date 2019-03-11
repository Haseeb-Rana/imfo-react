import axios from 'axios';
import {LOGIN_SUCCESS} from './types';
import {baseUrl} from '../../config/config';



export const signIn = (credential) => {
    return (dispatch) => {

        let payload = {
            email: credential.email,
            password: credential.password
        }

        console.log(`${baseUrl}/login`);

        return axios.post(`${baseUrl}/login`, payload).
        then(res =>
            {
                console.log(res);
            }).catch( err => {
                console.log(err)
            })

    }
}