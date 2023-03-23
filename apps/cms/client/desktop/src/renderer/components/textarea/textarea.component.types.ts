import { FunctionComponent, HTMLProps } from 'react';

type TextareaComponent = FunctionComponent<{ name: string; label: string } & HTMLProps<HTMLTextAreaElement>>;

export default TextareaComponent;
