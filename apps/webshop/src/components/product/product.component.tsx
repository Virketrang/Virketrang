import Image from 'next/image';
import ProductComponent from './product.component.types';
import styles from './product.component.module.sass';

const Products: ProductComponent = ({ product }) => {
    return (
        <div key={product.id} className={styles.product}>
            <img src={product.images[0].url} />
            <div>
                <h4>{product.name}</h4>
                <span>{product.retailPrice}</span>
            </div>
        </div>
    );
};

export default Products;
