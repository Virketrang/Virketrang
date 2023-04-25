import Image from 'next/image';
import ProductComponent from './product.component.types';
import styles, { close, distant } from './product.component.module.sass';
import Link from 'next/link';

const Products: ProductComponent = ({ id, images, price, name }) => {
    return (
        <Link href={`/confecture/${id}`}>
            <div className={styles.product}>
                <div className={styles['image-container']}>
                    <Image className={close} src={images.cover.distant.url} alt={images.cover.distant.alt} fill />
                    <Image className={distant} src={images.cover.close.url} alt={images.cover.close.alt} fill />
                </div>
                <div className={styles.details}>
                    <h4>{name}</h4>
                    <span>{price} kr.</span>
                </div>
            </div>
        </Link>
    );
};

export default Products;
