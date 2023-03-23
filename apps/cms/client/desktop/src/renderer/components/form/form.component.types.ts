import { FunctionComponent, HTMLProps, ReactNode } from 'react';

type FormComponent = FunctionComponent<{ children: ReactNode } & HTMLProps<HTMLFormElement>>;

export default FormComponent;
