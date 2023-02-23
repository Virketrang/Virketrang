import { Product } from '@packages/interfaces';
import { __server__ } from 'src/constants';

async function getProducts(): Promise<Product[]> {
    const products = await fetch(__server__ + '/products', { next: { revalidate: 60 * 60 * 24 } });

    if (!products.ok) throw new Error('Kunne ikke indlæse produkter');

    return products.json();
}

async function getProduct(id: string): Promise<Product> {
    const product = await fetch(__server__ + `/products/${id}`, { next: { revalidate: 60 * 60 * 24 } });

    if (!product.ok) throw new Error('Kunne ikke indlæse produktet');

    return product.json();
}

export { getProducts, getProduct };
