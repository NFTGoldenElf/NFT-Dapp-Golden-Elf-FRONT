import axios, { AxiosInstance } from "axios";
import { API_KEY, API_URL } from "./apiConfig";

const APICall: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
})

export default APICall

/* The APICall constant serves as a custom instance of Axios. 
Instead of using axios.get, axios.post, etc., we can use APICall, which 
has a predefined base URL, along with a predefined header. Beyond that, 
all methods of APICall are the same as those of axios.
Example:
API_URL = 'http://localhost:3000'
So, instead of axios.get(http://localhost:3000/api/v1/users, {
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
}), 
you can use:
APICall.get('/api/v1/users')
You can also add more properties to the headers if necessary:
APICall.get('/api/v1/users', {
    headers: {
        'token': 'Hello I am a token'
    }
})
*/