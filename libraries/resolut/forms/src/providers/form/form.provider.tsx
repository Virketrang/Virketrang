import { FormContext } from '../../context';

import FormProviderComponent from './form.provider.types';
import propTypes from './form.provider.proptypes';

const FormProvider: FormProviderComponent = ({ children, value }) => {
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

FormProvider.propTypes = propTypes;

export default FormProvider;
