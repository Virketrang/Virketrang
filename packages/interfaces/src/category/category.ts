import Product from '../product/product';

interface Category {
    id: number;
    name: string;
    product: Product[];
}

export default Category;
