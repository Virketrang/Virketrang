import { ProductType } from '@packages/enums';

interface CreateProduct {
    name: string;
    stock: string;
    description: string;
    retailPrice: string;
    category: number;
    type: ProductType;
    costPrice: string;
    available?: boolean;
}

export default CreateProduct;
