import { FunctionComponent } from 'react';
import { SetState } from '@interfaces/index';

type FirstScreenComponent = FunctionComponent<{
    name: string;
    stock: string;
    description: string;
    retailPrice: string;
    costPrice: string;
    setName: SetState<string>;
    setStock: SetState<string>;
    setDescription: SetState<string>;
    setRetailPrice: SetState<string>;
    setCostPrice: SetState<string>;
    screen: 1 | 2 | 3;
}>;

export default FirstScreenComponent;
