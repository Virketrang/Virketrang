import { useReducer } from 'react';

export type ModalState = { open: boolean };

export type ModalAction = { type: string; payload: ModalState };

const ModalReducer = (state: ModalState, { payload }: ModalAction) => ({ ...state, ...payload });

const useModalReducer = (initialState: ModalState) => {
    const [state, dispatch] = useReducer(ModalReducer, initialState);

    return [state, dispatch] as const;
};

export default useModalReducer;
