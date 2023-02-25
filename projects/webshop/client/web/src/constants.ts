const { SERVER, NODE_ENV } = process.env;

if (!SERVER) throw Error('SERVER is not deifned');

const __prod__ = NODE_ENV === 'production';
const __server__ = new URL(SERVER);

export { __prod__, __server__ };
