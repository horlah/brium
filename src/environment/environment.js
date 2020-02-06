const { NODE_ENV = '' } = process.env;

const environment = NODE_ENV.toLowerCase();
const apiUrl = 'https://us-central1-briumapp.cloudfunctions.net';

export { environment, apiUrl };
