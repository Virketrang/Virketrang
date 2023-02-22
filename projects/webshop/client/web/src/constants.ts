const { SERVER, NODE_ENV } = process.env;

const __prod__ = NODE_ENV === 'production';
const __server__ = SERVER;

export { __prod__, __server__ };
