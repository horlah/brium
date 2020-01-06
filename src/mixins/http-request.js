import { HTTP_CLIENT } from '../services/http-clients';

export default {
    methods: {
        HTTP_REQUEST: function(httpRequestData, token = null) {
            function setAuthHeader(token = null) {
                if (token) {
                    return { headers: { 'Authorization': `Bearer ${token}` } };
                } else {
                    return { headers: { 'Authorization': `Bearer 0000` } };
                }
            }

            async function postRequest(requestData, token = null) {
                const requestConfig = requestData.authRequest ? setAuthHeader(token) : {};
                try {
                    const res = await HTTP_CLIENT.post(requestData.url, requestData.body, requestConfig);
                    return res.data;
                } catch (error) {
                    return error;
                }
            }

            async function getRequest(requestData, token = null) {
                const requestConfig = requestData.authRequest ? setAuthHeader(token) : {};
                try {
                    const res = await HTTP_CLIENT.get(requestData.url, requestConfig);
                    return res.data;
                } catch (error) {
                    return error;
                }
            }

            async function deleteRequest(requestData, token = null) {
                const requestConfig = requestData.authRequest ? setAuthHeader(token) : {};
                try {
                    const res = await HTTP_CLIENT.delete(requestData.url, requestConfig);
                    return res.data;
                } catch (error) {
                    return error;
                }
            }

            async function patchRequest(requestData, token = null) {
                const requestConfig = requestData.authRequest ? setAuthHeader(token) : {};
                try {
                    const res = await HTTP_CLIENT.patch(requestData.url, requestData.body, requestConfig);
                    return res.data;
                } catch (error) {
                    return error;
                }
            }

            if (httpRequestData.method === 'POST') return postRequest(httpRequestData, token);
            else if (httpRequestData.method === 'GET') return getRequest(httpRequestData, token);
            else if (httpRequestData.method === 'DELETE') return deleteRequest(httpRequestData, token);
            else if (httpRequestData.method === 'PATCH') return patchRequest(httpRequestData, token);
        }
    }
};
