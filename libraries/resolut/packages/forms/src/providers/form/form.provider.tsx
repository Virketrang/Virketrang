import { memo } from 'react';

import { FormContext } from '../../context';

import FormProviderComponent from './form.provider.types';

const FormProvider: FormProviderComponent = ({ children, value }) => {
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default memo(FormProvider);
