import { ReactElement, ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRefAndChildren, Size, Status } from '@/types';

import Option from '../option/option.component';

type SelectOption = {
    value: string;
    label: string;
};

interface BaseProps extends Omit<HTMLPropsWithoutRefAndChildren<HTMLSelectElement>, 'size' | 'label'> {
    multiple?: boolean;
    label?: string;
    __type?: string;
    disabled?: boolean;
    loading?: boolean;
    stretch?: boolean;
    size?: Size;
    status?: Status;
}

interface SelectWithChildrenProp extends BaseProps {
    children: ReactElement<typeof Option> | ReactElement<typeof Option>[];
    options?: never;
}

interface SelectWithOptionsProp extends BaseProps {
    children?: never;
    options: SelectOption[];
}

export type Props = SelectWithChildrenProp | SelectWithOptionsProp;

export type Ref = RefAttributes<HTMLSelectElement>;

type SelectComponent = ForwardRefExoticComponent<Props & Ref>;

export default SelectComponent;
