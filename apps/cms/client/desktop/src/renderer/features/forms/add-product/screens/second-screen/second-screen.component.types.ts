import SetState from '@interfaces/set-state';
import { ProductType } from '@packages/enums';
import { FunctionComponent } from 'react';

type SecondScreenComponent = FunctionComponent<{
    screen: 1 | 2 | 3;
    category: string;
    setCategory: SetState<string>;
    type: ProductType;
    setType: SetState<ProductType>;
    available: 'true' | 'false';
    setAvailable: SetState<'true' | 'false'>;
}>;

export default SecondScreenComponent;
