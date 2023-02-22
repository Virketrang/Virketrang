import { FunctionComponent } from 'react';
import { Product } from '@packages/interfaces';

type ProductComponent = FunctionComponent<{
    product: Product;
}>;

export default ProductComponent;
