import axios from 'axios';
import { apiUrl, environment } from '../environment/environment';
import Store from '../store';

const env = environment === 'production' ? 'Production' : 'Staging';

const HTTP_AUTH = axios.create({
    baseURL: apiUrl,
    headers: {
        FIREBASE_AUTH_TOKEN: Store.state.userToken,
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
