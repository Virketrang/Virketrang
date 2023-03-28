import { createContext, Dispatch } from 'react';
import { FormReducerAction, FormReducerState } from '../hooks';

const FormContext = createContext<[FormReducerState, Dispatch<FormReducerAction>] | []>([]);

export default FormContext;
