import { Dispatch, FunctionComponent, ReactNode } from 'react';
import { FormReducerAction, FormReducerState } from '../../hooks';

type FormProviderComponent = FunctionComponent<{
    children: ReactNode;
    value: [FormReducerState, Dispatch<FormReducerAction>];
}>;

export default FormProviderComponent;
