import { ProductType } from '@packages/enums';

interface CreateProduct {
    name: string;
    stock: string;
    description: string;
    retailPrice: string;
    category: string;
    type: ProductType;
    costPrice: string;
    available?: boolean;
}

export default CreateProduct;
