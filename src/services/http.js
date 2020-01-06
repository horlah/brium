import axios from 'axios';
import { apiUrl, environment } from '../environment/environment';

const env = environment === 'production' ? 'Production' : 'Staging';

const HTTP_AUTH = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: 'Bearer {token}',
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
