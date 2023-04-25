import { FunctionComponent } from 'react';

type ProductComponent = FunctionComponent<{
    id: number;
    images: { cover: { close: { url: string; alt: string }; distant: { url: string; alt: string } } };
    price: number;
    name: string;
}>;

export default ProductComponent;
