import { FormEvent, forwardRef, memo } from 'react';

import { FormProvider } from '../../providers';
import { useFormReducer } from '../../hooks';

import FormComponent from './form.component.types';

const Form: FormComponent = memo(
    forwardRef(({ children, onSubmit, preventDefault = true, ...props }, ref) => {
        const [state, dispatch] = useFormReducer({});

        console.log('FORM', 'rerender...');

        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            preventDefault && event.preventDefault();

            console.log(state, 'RESOLUT_FORM_COMPONENT');

            onSubmit && onSubmit(state);
        };

        return (
            <FormProvider value={[state, dispatch]}>
                <form ref={ref} {...props} onSubmit={handleSubmit}>
                    {children}
                </form>
            </FormProvider>
        );
    })
);

Form.displayName = 'Form';

export default Form;
