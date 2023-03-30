import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { HTMLPropsWithoutRef } from '../../types';

type Props = { __type?: string } & HTMLPropsWithoutRef<HTMLInputElement>;

type Ref = RefAttributes<HTMLInputElement>;

type InputComponent = ForwardRefExoticComponent<Props & Ref>;

export default InputComponent;
