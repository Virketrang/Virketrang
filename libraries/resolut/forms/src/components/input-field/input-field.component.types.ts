import { FunctionComponent, HTMLProps } from 'react';

type InputFieldComponent = FunctionComponent<{ name: string; label: string } & HTMLProps<HTMLInputElement>>;

export default InputFieldComponent;
