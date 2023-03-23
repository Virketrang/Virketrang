import { ProductType } from '@packages/enums';
import Image from '../image/image';

interface Product {
    id: string;
    name: string;
    description: string;
    retailPrice: number;
    costPrice: number;
    stock: number;
    images: Image[];
    type: ProductType;
    category: string;
    available: boolean;
}

export default Product;
