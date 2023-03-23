import FormComponent from './form.component.types';

const Form: FormComponent = ({ children, ...props }) => {
    return <form {...props}>{children}</form>;
};

export default Form;
