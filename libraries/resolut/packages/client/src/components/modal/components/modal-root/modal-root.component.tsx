import { Dispatch, createContext, memo } from 'react';

import ModalRootComponent from './modal-root.component.types';
import useModalReducer, { ModalAction, ModalState } from '../../hooks/use-modal-reducer';

const initialState = { open: false };

export const ModalContext = createContext<{ state: ModalState; dispatch: Dispatch<ModalAction> } | undefined>(
    undefined
);

const ModalRoot: ModalRootComponent = memo(({ children }) => {
    const [state, dispatch] = useModalReducer(initialState);
    return <ModalContext.Provider value={{ state, dispatch }}>{children}</ModalContext.Provider>;
});

export default ModalRoot;
