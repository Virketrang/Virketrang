import { useContext } from 'react';
import { ModalContext } from '../components/modal-root/modal-root.component';

const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context?.state || !context?.dispatch) throw Error('ModalContext is not defined');

    return { state: context.state, dispatch: context.dispatch };
};

export default useModalContext;
