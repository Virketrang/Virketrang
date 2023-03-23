import { FunctionComponent, HTMLProps } from 'react';

interface Option {
    value: string | number;
    label: string;
}

type SelectComponent = FunctionComponent<{ options: Option[] } & HTMLProps<HTMLSelectElement>>;

export default SelectComponent;
