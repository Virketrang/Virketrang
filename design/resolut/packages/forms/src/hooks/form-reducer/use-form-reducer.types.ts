import { FieldData } from '../../interfaces';

export interface FormReducerState {
    [key: string]: FieldData;
}

export interface FormReducerAction {
    type: string;
    payload: FieldData;
}
