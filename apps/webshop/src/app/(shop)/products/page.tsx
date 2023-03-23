import { Product as ProductCompoent } from '@components';
import { Product } from '@packages/interfaces';
import styles from './page.module.sass';

export const metadata = {
    title: 'Liedecke & Noergaard | Produkter',
    description: 'Alles vores produkter',
};

async function getData() {
    const res = await fetch('http://localhost:8080/products');

    if (!res.ok) throw new Error('Failed to fetch data');

    const json = await res.json();

    return json.body;
}

const Products = async () => {
    const products: Product[] = await getData();

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Udvalgte Produkter</h2>
            <div className={styles.products}>
                {products.map(product => (
                    <ProductCompoent key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Products;
