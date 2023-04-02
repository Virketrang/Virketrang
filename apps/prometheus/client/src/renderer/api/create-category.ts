import HttpClient from '@virketrang/http';

const ERROR_MESSAGE = 'Kunne ikke oprette produktet';
const REQUEST_OPTIONS = { errorMessage: ERROR_MESSAGE };

const createCategory = (name: string) => HttpClient.post('/categories', { name }, REQUEST_OPTIONS);

export default createCategory;
