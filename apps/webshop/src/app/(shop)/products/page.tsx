import { Product as ProductCompoent } from '@components';
import { Product } from '@packages/interfaces';
// import styles from './page.module.sass';
import HttpClient from '@virketrang/http';

export const metadata = {
    title: 'Liedecke & Noergaard | Produkter',
    description: 'Alles vores produkter',
};

const Products = async () => {
    const products = await HttpClient.get<Product[]>('/products', { errorMessage: 'Kunne ikke indlæse produkter!' });

    return (
        <section>
            <h2>Udvalgte Produkter</h2>
            {products.map((product) => (
                <ProductCompoent key={product.id} product={product} />
            ))}
        </section>
    );
};

export default Products;
