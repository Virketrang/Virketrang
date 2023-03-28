import { useReducer } from 'react';
import { FormReducerAction, FormReducerState } from './use-form-reducer.types';

function reducer(state: FormReducerState, action: FormReducerAction) {
    const { type, payload } = action;

    return { ...state, [type]: payload };
}

const useFormReducer = (initialValue: FormReducerState) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return [state, dispatch] as const;
};

export default useFormReducer;
