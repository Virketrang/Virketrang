import { Product } from '../../components';
import { __server__ } from '../../constants';
import { getProducts } from 'src/api/products';
import styles from './page.module.sass';

const Products = async () => {
    const products = await getProducts();

    return (
        <section className={styles.page}>
            <h2>Udvalgte Produkter</h2>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </section>
    );
};

export default Products;
