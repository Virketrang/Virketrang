import { FormEvent, forwardRef, memo, useCallback } from 'react';

import { FormProvider } from '../../providers';
import { useFormReducer } from '../../hooks';

import { Ref, Props } from './form.component.types';
import propTypes from './form.component.proptypes';

const Form = forwardRef<Ref, Props>(({ children, onSubmit, preventDefault = true, ...props }, ref) => {
    const [state, dispatch] = useFormReducer({});

    console.log('FORM', 'rerender...');

    const handleSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            preventDefault && event.preventDefault();

            onSubmit && onSubmit(state);
        },
        [preventDefault, onSubmit]
    );

    return (
        <FormProvider value={[state, dispatch]}>
            <form ref={ref} {...props} onSubmit={handleSubmit}>
                {children}
            </form>
        </FormProvider>
    );
});

Form.propTypes = propTypes;

export default memo(Form);
