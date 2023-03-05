const { SERVER, NODE_ENV } = process.env;

const __prod__ = NODE_ENV === 'production';
const __server__ = SERVER ? new URL(SERVER) : new URL('http://localhost:8080');

export { __prod__, __server__ };
