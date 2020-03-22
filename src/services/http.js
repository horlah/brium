import axios from 'axios';
import { apiUrl, environment } from '../environment/environment';
import Store from '../store';

const env = environment === 'production' ? 'Production' : 'Staging';

const token = Store.getters.userToken || localStorage.getItem('TOKEN');

const HTTP_AUTH = axios.create({
    baseURL: apiUrl,
    headers: {
        FIREBASE_AUTH_TOKEN: token,
        ENVIRONMENT: env
    }
});

const HTTP = axios.create({
    baseURL: apiUrl,
    headers: {
        ENVIRONMENT: env
    }
});

export { HTTP_AUTH, HTTP };
