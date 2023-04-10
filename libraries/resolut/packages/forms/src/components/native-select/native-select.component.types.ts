import { ReactElement, ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRefAndChildren, Status, Size } from '@/types';

import Option from '../option/option.component';

type SelectOption = {
    value: string;
    label: string;
};

type SelectShape = 'square' | 'rounded';

interface BaseProps extends Omit<HTMLPropsWithoutRefAndChildren<HTMLSelectElement>, 'size'> {
    __type?: string;
    disabled?: boolean;
    loading?: boolean;
    stretch?: boolean;
    size?: Size;
    fit?: number;
    status?: Status;
    shape?: SelectShape;
}

interface NativeSelectWithChildrenProp extends BaseProps {
    children: ReactElement<typeof Option> | ReactElement<typeof Option>[];
    options?: never;
}

interface NativeSelectWithOptionsProp extends BaseProps {
    children?: never;
    options: SelectOption[];
}

export type Props = NativeSelectWithChildrenProp | NativeSelectWithOptionsProp;

export type Ref = RefAttributes<HTMLSelectElement>;

type NativeSelectComponent = ForwardRefExoticComponent<Props & Ref>;

export default NativeSelectComponent;
