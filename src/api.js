import axios from "axios";
import {apiUrl} from "./config/config";

export default {
    user: {
        login: (credentials) =>  {

            const payload = {
                email: credentials.email,
                password: credentials.password
            }
           return axios.post(`${apiUrl}/login`, payload).then((res => res.data))},
        signup: (newUser) => {
            const payload = {
                email:    newUser.email,
                fullName: newUser.fullName,
                password: newUser.password
            }

            return axios.post(`${apiUrl}/signup`, payload).then((res => res.data))
        }
        }
}