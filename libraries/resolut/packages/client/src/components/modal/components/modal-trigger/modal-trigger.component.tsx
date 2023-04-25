import { memo } from 'react';

import useModalContext from '../../hooks/use-modal-context';
import ModalTriggerComponent from './modal-trigger.component.types';

const ModalTrigger: ModalTriggerComponent = memo(() => {
    const { dispatch } = useModalContext();
    return <button onClick={() => dispatch({ payload: { open: true }, type: '' })}>Open</button>;
});

export default ModalTrigger;
