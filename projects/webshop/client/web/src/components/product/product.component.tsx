import Image from 'next/image';
import ProductComponent from './product.component.types';
import styles from './product.component.module.sass';

const Products: ProductComponent = ({ product }) => {
    return (
        <div className={styles.product} key={product.id}>
            <Image src="/assets/placeholders/placeholder-image-2.jpeg" width={400} height={400} alt="description" />
        </div>
    );
};

export default Products;
