import { useContext } from 'react';
import { FormContext } from '../../context';

const useFormContext = () => {
    const [state, dispatch] = useContext(FormContext);

    if (!state || !dispatch) throw Error('FormContext is not defined!');

    return [state, dispatch] as const;
};

export default useFormContext;
