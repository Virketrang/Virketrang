import { FunctionComponent, HTMLProps } from 'react';

type TextFieldComponent = FunctionComponent<{ name: string; label: string } & HTMLProps<HTMLInputElement>>;

export default TextFieldComponent;
